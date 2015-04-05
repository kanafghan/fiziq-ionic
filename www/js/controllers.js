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
        console.log('Registration', $scope.signupData);

        user.register($scope.signupData.name, $scope.signupData.email);

        $scope.modal.hide();
    };
})

.controller('WorkoutCtrl', function(
    $scope, 
    $interval, 
    $state, 
    $ionicPopup,
    $stateParams,
    WorkoutSet,
    activeWorkout
) {
    var init = function () {
        var workout = activeWorkout.getWorkout();
        $scope.workoutName = workout ? workout.name : 'N/A';
        $scope.sets = workout ? workout.getWorkoutSets() : [];

        $scope.clock = new Date(0, 0, 0, 0, 0, 0, 0);
        $interval(function () {
            $scope.clock.setSeconds($scope.clock.getSeconds() + 1)
        }, 1000);
    };
    init();

    var processWorkout = function () {
        console.log(activeWorkout.getWorkout());
        activeWorkout.getWorkout().duration = $scope.clock.getSeconds() + (60 * $scope.clock.getMinutes());
        console.log(activeWorkout.getWorkout());
    };

    $scope.addSet = function (set) {
        console.log(set);
        if (!set) {
            $ionicPopup.alert({
                title: 'Add Set',
                template: 'Please fill in the Reps and Weight first.'
            });

            return;
        }

        console.log(activeWorkout.getWorkout())
        if (!activeWorkout.getWorkout()) {
            return;
        }
        activeWorkout.getWorkout().addWorkoutSet(new WorkoutSet(set.weight, set.reps));
        $scope.sets = activeWorkout.getWorkout().getWorkoutSets();
    };

    $scope.removeSet = function (index) {
        console.log(index);
        if (index >= $scope.length) {
            return;
        }

        console.log(activeWorkout.getWorkout().getWorkoutSets());
        activeWorkout.getWorkout().removeWorkoutSet(index);
        $scope.sets = activeWorkout.getWorkout().getWorkoutSets();
        console.log(activeWorkout.getWorkout().getWorkoutSets());
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

            console.log('Well done!');

            $state.go('app.done', {sessionId: $stateParams.sessionId});
        });
    };

    var workout = activeWorkout.getWorkout();
    $scope.workoutName = workout ? workout.name : 'N/A';
    $scope.sets = workout ? workout.getWorkoutSets() : [];

    $scope.clock = new Date(0, 0, 0, 0, 0, 0, 0);
    $interval(function () {
        $scope.clock.setSeconds($scope.clock.getSeconds() + 1)
    }, 1000);
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

    console.log($scope.workouts);

    $scope.finish = function () {
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
            disableAnimate: false,
            disableBack: true
        });

        activeWorkoutSession.getWorkoutSession().endSession();
        activeWorkoutSession.save();

        var session = new WorkoutSession();
        activeWorkoutSession.setWorkoutSession(session);
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
    activeWorkout
) {
    var init = function () {
        $scope.muscleGroups = muscleGroups;
        $scope.workouts = [];
        $scope.selectedMuscleGroup = null;
        $scope.selectedWorkout = null;
    };

    var processSelection = function () {
        console.log('Selected Muscle Group: ' + $scope.selectedMuscleGroup.label);
        console.log('Selected Workout: ' + $scope.selectedWorkout.label);

        var newWorkout = new Workout($scope.selectedWorkout.label);
        activeWorkoutSession.getWorkoutSession().addWorkout(newWorkout);
        activeWorkout.setWorkout(newWorkout);

        console.log(activeWorkout.getWorkout());
        console.log(activeWorkoutSession.getWorkoutSession());
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
