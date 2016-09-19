angular.module('fiziq.controllers', [])

.controller('AppCtrl', function(
    $scope,
    $ionicModal,
    $timeout,
    user
) {
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
    $ionicHistory,
    WorkoutSet,
    activeWorkoutSession,
    Timer,
    loggedWorkoutSessions
) {
    var init = function () {
        $scope.workout = activeWorkoutSession.getWorkoutSession().findWorkoutById($stateParams.workoutId);
        if (!$scope.workout) {
            throw Error('No workout with id `' + $stateParams.workoutId + '` could be found!');
        }

        $scope.timer = new Timer();
        $scope.timer.start();

        $scope.sessionTimer = activeWorkoutSession.getTimer();

        var loggedWorkout = loggedWorkoutSessions.findWorkout($scope.workout.name);
        $scope.loggedSets = loggedWorkout ? loggedWorkout.getWorkoutSets() : [];
    };
    init();

    var processWorkout = function () {
        $scope.timer.stop();
        var duration = $scope.timer.get().getSeconds() + (60 * $scope.timer.get().getMinutes());
        $scope.workout.duration += duration;
        activeWorkoutSession.store();
    };

    $scope.set = new WorkoutSet(0);
    $scope.addSet = function () {
        if (!$scope.set.isValid()) {
            $ionicPopup.alert({
                title: 'Add Set',
                template: 'Please fill in the Reps and Weight first.'
            });

            return;
        }

        $scope.workout.addWorkoutSet($scope.set);

        $scope.set = new WorkoutSet(0);

        activeWorkoutSession.store();
    };

    $scope.removeSet = function (index) {
        if (index >= $scope.workout.getWorkoutSets().length) {
            return;
        }

        $scope.workout.removeWorkoutSet(index);

        activeWorkoutSession.store();
    };

    $scope.back = function () {
        function process() {
            processWorkout();
            $ionicHistory.goBack();
        }

        if ($scope.set.isValid()) {
            var set = $scope.set.weight + 'x' + $scope.set.reps;
            var confirm = $ionicPopup.confirm({
                title: 'Unsaved Changes',
                template: '<p>You have not saved the set `' + set + '`. Do you want to discard it?</p>'
            });

            return confirm.then(function (result) {
                if (result) {
                    process();
                }
            });
        }

        process();
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

            $state.go('app.done', {
                sessionId: $stateParams.sessionId
            });
        });
    };

    $scope.duplicateSet = function(set) {
        $scope.set = new WorkoutSet(set.weight, set.reps);
        $scope.addSet();
    };

    $scope.$on('$ionicView.beforeLeave', function(){
        processWorkout();
    });
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
            historyRoot: true
        });

        var timer = activeWorkoutSession.getTimer();
        if (timer) {
            timer.stop();
        }

        activeWorkoutSession.getWorkoutSession().endSession();
        activeWorkoutSession.save();
        activeWorkoutSession.terminate();

        activeWorkoutSession.setWorkoutSession(null);
        activeWorkoutSession.setTimer(null);

        $state.go('app.selection', {sessionId: 0});
    };
})

.controller('SelectionCtrl', function(
    $scope,
    $state,
    $stateParams,
    $ionicPopup,
    muscleGroups,
    workouts,
    activeWorkoutSession,
    WorkoutSession,
    Workout,
    Timer,
    loggedWorkoutSessions,
    user
) {
    var init = function () {
        $scope.activeWorkoutSession = activeWorkoutSession;
        $scope.muscleGroups = [];
        $scope.workouts = [];
        $scope.loggedSessions = loggedWorkoutSessions.getLatest(2);
        $scope.selection = {
            muscleGroup: null,
            workout: null
        };

        angular.forEach(muscleGroups, function(group){
            var count = loggedWorkoutSessions.findCountOfMuscleGroup(group.label);
            this.push({
                label: group.label,
                count: count
            });
        }, $scope.muscleGroups);
    };

    var processSelection = function () {
        if (!activeWorkoutSession.getWorkoutSession()) {
            activeWorkoutSession.setWorkoutSession(new WorkoutSession());
        }

        var newWorkout = new Workout($scope.selection.workout.label, $scope.selection.muscleGroup);
        if (!activeWorkoutSession.getWorkoutSession().hasWorkout(newWorkout)) {
            activeWorkoutSession.getWorkoutSession().addWorkout(newWorkout);
        } else {
            newWorkout = activeWorkoutSession.getWorkoutSession().findWorkoutByName(newWorkout.name);
        }

        activeWorkoutSession.store();
    };

    var getWorkoutsBasedOnMuscleGroupSelection = function () {
        var group = $scope.selection.muscleGroup;
        for (var key in workouts) {
            if (key.toLowerCase() === group.toLowerCase()) {
                var result = [];
                angular.forEach(workouts[key], function(workout) {
                    var w = new Workout(workout.label, workout.muscle_group);
                    if (!user.getWorkoutsPool().hasWorkout(w)) {
                        return;
                    }

                    var count = loggedWorkoutSessions.findCountOfWorkout(w);
                    this.push({
                        label: '(' + count + ') ' + workout.label,
                        count: count,
                        value: workout
                    });
                }, result);

                return result;
            }
        }

        return [];
    };

    $scope.updateWorkouts = function () {
        $scope.workouts = getWorkoutsBasedOnMuscleGroupSelection();
    };

    $scope.add = function () {
        if (!$scope.selection.workout) {
            return $ionicPopup.alert({
                title: 'Select Workout',
                template: 'Please select a workout first!'
            });
        }

        processSelection();

        $scope.selection.muscleGroup = null;
        $scope.selection.workout = null;
    };

    $scope.start = function () {
        if (!activeWorkoutSession.getWorkoutSession().getWorkouts().length) {
            return $ionicPopup.alert({
                title: 'Select Workout',
                template: 'Please select a workout first!'
            });
        }

        var timer = activeWorkoutSession.getTimer();
        if (!timer) {
            timer = new Timer();
            timer.start();
            activeWorkoutSession.setTimer(timer);
        }

        activeWorkoutSession.store();

        $state.go('app.workout-session', {
            sessionId: activeWorkoutSession.getWorkoutSession().id
        });
    };

    init();

    $scope.$on('$ionicView.beforeEnter', function() {
        var session = activeWorkoutSession.load();

        if (session && activeWorkoutSession.getTimer()) {
            activeWorkoutSession.setWorkoutSession(session);
            $state.go('app.workout-session', {
                sessionId: session.id
            });
        }
    });

    $scope.$on('$ionicView.afterEnter', function() {
        if (!user.getWorkoutsPool() || !user.getWorkoutsPool().getWorkouts().length) {
            $ionicPopup.alert({
                title: 'Empty Workouts Pool',
                template: 'Please build your workouts pool first!'
            });

            $state.go('app.workouts-pool');
        }
    });
})

.controller('HistoryCtrl', function(
    $scope,
    loggedWorkoutSessions
) {
    $scope.loggedSessions = [];

    $scope.remove = function (id) {
        $scope.loggedSessions = $scope.loggedSessions.filter(function(item) {
            return item.id != id;
        });
        loggedWorkoutSessions.removeWorkoutSession(id);
    };

    $scope.$on('$ionicView.enter', function() {
        $scope.loggedSessions = loggedWorkoutSessions.getLatest();
    });
})

.controller('WorkoutsPoolCtrl', function(
    $scope,
    $ionicPopup,
    user,
    workouts,
    muscleGroups,
    WorkoutsPool,
    Workout
){
    $scope.muscleGroups = muscleGroups;
    $scope.selection = {
        workouts: []
    };
    $scope.workoutsPool = user.getWorkoutsPool();
    $scope.workouts = [];

    angular.forEach(workouts, function(workoutsList){
        if ($scope.workoutsPool) {
            var filteredWorkouts = [];
            angular.forEach(workoutsList, function(workout){
                var w = new Workout(workout.label, workout.muscle_group);
                if (!$scope.workoutsPool.hasWorkout(w)) {
                    this.push(workout);
                }
            }, filteredWorkouts);

            $scope.workouts = $scope.workouts.concat(filteredWorkouts);
        } else {
            $scope.workouts = $scope.workouts.concat(workoutsList);
        }
    });

    $scope.add = function () {
        console.log('Selected Workouts: ', $scope.selection.workouts);
        if (!$scope.selection.workouts.length) {
            return $ionicPopup.alert({
                title: 'Select Workout',
                template: 'Please select one or more workouts first!'
            });
        }

        if (!$scope.workoutsPool) {
            $scope.workoutsPool = new WorkoutsPool();
        }

        angular.forEach($scope.selection.workouts, function(workout){
            var w = new Workout(workout.label, workout.muscle_group);
            $scope.workoutsPool.addWorkout(w);

            // remove the workout from the list of selectables
            for (var i = $scope.workouts.length - 1; i >= 0; i--) {
                if ($scope.workouts[i].label === workout.label) {
                    $scope.workouts.splice(i, 1);
                }
            }
        });

        user.storeWorkoutsPool($scope.workoutsPool);
    };

    $scope.remove = function (workout) {
        $scope.workoutsPool.removeWorkout(workout);
        user.storeWorkoutsPool($scope.workoutsPool);
    };

    $scope.getWorkoutsByMuscleGroup = function (muscleGroup) {
        if (!$scope.workoutsPool) {
            return [];
        }

        var result = [];
        var workouts = $scope.workoutsPool.getWorkouts();
        for (var i = workouts.length - 1; i >= 0; i--) {
            if (workouts[i].muscleGroup.toLowerCase() === muscleGroup.label.toLowerCase()) {
                result.push(workouts[i]);
            }
        }

        return result;
    };
})

.controller('WorkoutSessionCtrl', function(
    $scope,
    $state,
    $stateParams,
    $ionicPopup,
    $ionicHistory,
    activeWorkoutSession
){
    $scope.timer = activeWorkoutSession.getTimer();
    $scope.workouts = activeWorkoutSession.getWorkoutSession().getWorkouts();

    $scope.logWorkout = function (workout) {
        $state.go('app.workout', {
            sessionId: activeWorkoutSession.getWorkoutSession().id,
            workoutId: workout.id
        });
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

            $state.go('app.done', {
                sessionId: activeWorkoutSession.getWorkoutSession().id
            });
        });
    };

    $scope.discard = function () {
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });

        var timer = activeWorkoutSession.getTimer();
        if (timer) {
            timer.stop();
        }

        activeWorkoutSession.terminate();

        activeWorkoutSession.setWorkoutSession(null);
        activeWorkoutSession.setTimer(null);

        $state.go('app.selection', {sessionId: 0});
    };
})

;
