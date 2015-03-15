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

.controller('WorkoutCtrl', function($scope, $interval, $state, displayDone) {
    $scope.sets = [];

    $scope.clock = new Date(0, 0, 0, 0, 0, 0, 0);
    $interval(function () {
        $scope.clock.setSeconds($scope.clock.getSeconds() + 1)
    }, 1000);

    $scope.addSet = function (clock, set) {
        var set = {clock:clock.valueOf(), reps:set.reps, weight:set.weight};
        console.log(set);
        $scope.sets.push(set);
        $scope.sets.reverse();
    };

    $scope.done = function () {
        displayDone.setSets($scope.sets);
        $state.go('app.done');
    }
})

.controller('DoneCtrl', function($scope, displayDone) {
    $scope.sets = displayDone.getSets();

    console.log($scope.sets);
    console.log(displayDone.getSets());
})

.controller('SelectionCtrl', function($log, $scope, muscleGroups, workouts, activeWorkoutSession, WorkoutSession, Workout, activeWorkout) {

    if (!activeWorkoutSession.getWorkoutSession()) {
        activeWorkoutSession.setWorkoutSession(new WorkoutSession());
    };

    $scope.muscleGroups = muscleGroups;
    $scope.selectedMuscleGroup = muscleGroups[0];
    $scope.selectedWorkout = workouts[muscleGroups[0].label][0];

    var getWorkoutsBasedOnMuscleGroupSelection = function () {
        for (var key in workouts) {
            if (key == $scope.selectedMuscleGroup.label) {
                return workouts[key];
            }
        }

        return [];
    };
    $scope.workouts = getWorkoutsBasedOnMuscleGroupSelection();

    $scope.updateWorkouts = function () {
        $scope.workouts = getWorkoutsBasedOnMuscleGroupSelection();

        console.log('MG selected: ' +  + $scope.selectedMuscleGroup.label);
    };

    $scope.doSelect = function () {
        console.log('Selected Muscle Group: ' + $scope.selectedMuscleGroup.label);
        console.log('Selected Workout: ' + $scope.selectedWorkout.label);

        var session = activeWorkoutSession.getWorkoutSession();
        var newWorkout = new Workout($scope.selectedWorkout.label);
        session.addWorkout(newWorkout);
        activeWorkout.setWorkout(newWorkout);

        console.log(activeWorkoutSession.getWorkoutSession());
    };
})

;
