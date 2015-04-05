angular.module('fiziq.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, user) {
    // Form data for the registration modal
    $scope.signupData = {};

    // Create the registration modal that we will use later
    $ionicModal.fromTemplateUrl('templates/signup.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;

        if (!user.isRegistered()) {
            $scope.modal.show();
        }
    });

    // Perform the registration action when the user submits the registration form
    $scope.doSignup = function() {
        user.register($scope.signupData.name, $scope.signupData.email);
        $scope.modal.hide();
    };
})

.controller('WorkoutCtrl', function(
    $scope, 
    $state, 
    $ionicPopup,
    $stateParams,
    WorkoutSet,
    activeWorkout,
    activeWorkoutSession,
    Timer
) {
    var init = function () {
        var workout = activeWorkout.getWorkout();
        $scope.workoutName = workout ? workout.name : 'N/A';
        $scope.sets = workout ? workout.getWorkoutSets() : [];

        $scope.timer = new Timer();
        $scope.timer.start();

        $scope.sessionTimer = activeWorkoutSession.getTimer();
    };
    init();

    var processWorkout = function () {
        $scope.timer.stop();
        var duration = $scope.timer.get().getSeconds() + (60 * $scope.timer.get().getMinutes());
        activeWorkout.getWorkout().duration = duration;
    };

    $scope.addSet = function (set) {
        if (!set) {
            $ionicPopup.alert({
                title: 'Add Set',
                template: 'Please fill in the Reps and Weight first.'
            });

            return;
        }

        if (!activeWorkout.getWorkout()) {
            return;
        }
        activeWorkout.getWorkout().addWorkoutSet(new WorkoutSet(set.weight, set.reps));
        $scope.sets = activeWorkout.getWorkout().getWorkoutSets();
    };

    $scope.removeSet = function (index) {
        if (index >= $scope.length) {
            return;
        }

        activeWorkout.getWorkout().removeWorkoutSet(index);
        $scope.sets = activeWorkout.getWorkout().getWorkoutSets();
    };

    $scope.newWorkout = function () {
        if (0 === $scope.sets.length) {
            return $state.go('app.selection', {sessionId: $stateParams.sessionId});
        }

        processWorkout();
        $state.go('app.selection', {sessionId: $stateParams.sessionId});
    };

    $scope.done = function () {
        var confirm = $ionicPopup.confirm({
            title: 'Finish Workout',
            template: '<p>This will terminate the log for this workout session. Are you done for today?</p>'
        });

        confirm.then(function (res) {
            if (!res) {
                return;
            }

            processWorkout();

            $state.go('app.done', {sessionId: $stateParams.sessionId});
        });
    };
})

.controller('DoneCtrl', function(
    $scope,
    $state,
    $stateParams,
    $ionicHistory,
    WorkoutSession,
    activeWorkoutSession
) {
    $scope.workouts = activeWorkoutSession.getWorkoutSession().getWorkouts();

    $scope.finish = function () {
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
            disableAnimate: false,
            disableBack: true
        });

        activeWorkoutSession.getTimer().stop();
        activeWorkoutSession.getWorkoutSession().endSession();
        activeWorkoutSession.save();

        var session = new WorkoutSession();
        activeWorkoutSession.setWorkoutSession(session);
        activeWorkoutSession.setTimer(null);
        $state.go('app.selection', {sessionId: session.id});
    };
})

.controller('SelectionCtrl', function(
    $scope,
    $state,
    $stateParams,
    muscleGroups, 
    workouts,
    activeWorkoutSession, 
    WorkoutSession, 
    Workout,
    Timer,
    activeWorkout
) {
    var init = function () {
        $scope.muscleGroups = muscleGroups;
        $scope.workouts = [];
        $scope.selectedMuscleGroup = null;
        $scope.selectedWorkout = null;
    };

    var processSelection = function () {
        var newWorkout = new Workout($scope.selectedWorkout.label);
        activeWorkoutSession.getWorkoutSession().addWorkout(newWorkout);
        activeWorkout.setWorkout(newWorkout);
    };

    var getWorkoutsBasedOnMuscleGroupSelection = function () {
        for (var key in workouts) {
            if (key == $scope.selectedMuscleGroup.label) {
                return workouts[key];
            }
        }

        return [];
    };

    $scope.updateWorkouts = function () {
        $scope.workouts = getWorkoutsBasedOnMuscleGroupSelection();
    };

    $scope.doSelect = function () {
        processSelection();
    };

    $scope.start = function () {
        var timer = activeWorkoutSession.getTimer();
        if (!timer) {
            timer = new Timer();
            timer.start();
            activeWorkoutSession.setTimer(timer);
        }

        $state.go('app.workout', {
            sessionId: $stateParams.sessionId,
            workoutId: activeWorkout.getWorkout().id
        });
    };

    if (!activeWorkoutSession.getWorkoutSession()) {
        activeWorkoutSession.setWorkoutSession(new WorkoutSession());
    }

    init();
})

;
