angular.module('starter.services', [])

.value('muscleGroups', [
    {label : 'Chest'},
    {label : 'Shoulders'},
    {label : 'Back'},
    {label : 'Biceps'},
    {label : 'Triceps'},
    {label : 'Legs'},
    {label : 'Abs'}
])

.value('workouts', {
    'Chest' : [
        {label : 'Barbell Flat Bench Press'},
        {label : 'Barbell Incline Bench Press'},
        {label : 'Dumbbell Flat Bench Press'},
        {label : 'Dumbbell Incline Bench Press'},
        {label : 'Decline Dumbbell Bench Press'},
        {label : 'Flat Bench Dumbbell Fly'},
        {label : 'Incline Dumbbell Fly'},
        {label : 'Cable Crossovers'},
        {label : 'Dumbbell Pullover'},
        {label : 'Parallel Bar Dip'}
    ],
    'Shoulders' : [
        {label : 'Seated Dumbbell Press'},
        {label : 'Front Raises'},
        {label : 'Lateral Raises'},
        {label : 'Reverse Flyes'},
        {label : 'Single Arm Lateral Raise With Dumbbell'},
        {label : 'Upright Cable Rows'},
        {label : 'Upright Barbell Rows'},
        {label : 'Seated Military Press On Smith Machine'},
        {label : 'Military Shoulder Barbell Presses'},
        {label : 'Single Side Cable Lateral Raise'}
    ],
    'Back' : [
        {label : 'Pull-Ups'},
        {label : 'Wide-Grip Lat Pulldown'},
        {label : 'One-Arm Dumbbell Rows'},
        {label : 'Seated Cable Rows'},
        {label : 'Back Extensions'},
        {label : 'Straight-Arm Pulldowns'},
        {label : 'Smith Machine Shrugs'},
        {label : 'Standing Shrugs with Dumbbells'},
        {label : 'Bent-over Barbell Rows'},
        {label : 'Deadlifts'}
    ],
    'Biceps' : [
        {label : 'Seated Alternate Dumbbell Curl'},
        {label : 'Barbell Curls'},
        {label : 'Preacher Curls'},
        {label : 'Concentration Curls'},
        {label : 'Dumbbell Becips Curls'},
        {label : 'Cable Curls'},
        {label : 'Hammer Curls'},
        {label : 'Seated Inclined Biceps Curls'},
        {label : 'Lying Dumbbell Biceps Curls'},
        {label : 'Close Grip Chin Ups'}
    ],
    'Triceps' : [
        {label : 'Seated Triceps Presses'},
        {label : 'Lying Triceps Presses'},
        {label : 'Triceps Kickbacks'},
        {label : 'Triceps Pushdowns'},
        {label : 'Overhead Rope Extensions'},
        {label : 'Bench Dips'},
        {label : 'Dips on the Dip Machine'},
        {label : 'Close Grip Bench Press'},
        {label : 'One Arm Dumbbell Extension'},
        {label : 'Seated Triceps Dumbbell Extension'}
    ],
    'Legs' : [
        {label : 'Barbell Squats'},
        {label : 'Leg Presses'},
        {label : 'Leg Extensions'},
        {label : 'Dumbbell Lunges'},
        {label : 'Sissy Squat'},
        {label : 'Lying Leg Curls'},
        {label : 'Seated Calf Raises'},
        {label : 'Standing Heel Raises'},
        {label : 'Squats on Smith Machine'},
        {label : 'Stift-leg Deadlifts'},
        {label : 'Glute Machine'}
    ],
    'Abs' : [
        {label : 'Floor Crunches'},
        {label : 'Incline Knee Raises'},
        {label : 'Decline Crunches'},
        {label : 'Roman Chair Sit Ups'},
        {label : 'Hanging Knee Raises'},
        {label : 'Reverse Crunches'},
        {label : 'Cable Crunches'},
        {label : 'The Swiss ball crunch'},
        {label : 'Knee Raises'},
        {label : 'Lying Leg Raise'},
        {label : 'Vertical Leg Raises'}
    ]
})

.factory('WorkoutSession', function() {
    return function() {
        var workouts = [];

        this.addWorkout = function (workout) {
            workouts[workouts.length] = workout;
        };

        this.getWorkouts = function () {
            return workouts;
        };
    };
})

.factory('Workout', function() {
    return function(name) {
        this.name = name;
        var workoutSets = [];

        this.addWorkoutSet = function (set) {
            workoutSets[workoutSets.length] = set;
        };

        this.getWorkoutSets = function () {
            return workoutSets;
        };
    };
})

.factory('WorkoutSet', function() {
    return function(weight, reps) {
        this.weight = weight;
        this.reps = reps;
        var workoutSets = [];

        this.addWorkoutSet = function (set) {
            workoutSets[workoutSets.length] = set;
        };

        this.getWorkoutSets = function () {
            return workoutSets;
        };
    };
})

.service('activeWorkoutSession', function() {
    var workoutSession = null;

    this.setWorkoutSession = function (ws) {
        workoutSession = ws;
    };

    this.getWorkoutSession = function () {
        return workoutSession;
    };
})

.service('activeWorkout', function() {
    var workout = null;

    this.setWorkout = function (w) {
        workout = w;
    };

    this.getWorkout = function () {
        return workout;
    };
})


;
