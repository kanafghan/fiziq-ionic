angular.module('fiziq.services', [])

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

.factory('WorkoutSession', function(
    Workout
) {
    return function() {
        this.id = new Date().getTime();
        this.startedAt = new Date();
        this.endedAt = null;

        var workouts = [];

        this.addWorkout = function (workout) {
            workouts[workouts.length] = workout;
        };

        this.getWorkouts = function () {
            return workouts;
        };

        this.endSession = function () {
            this.endedAt = new Date();
        };

        this.toJson = function () {
            var workoutsAsJson = [];
            for (var i = 0; i < workouts.length; i++) {
                workoutsAsJson[i] = workouts[i].toJson();
            }

            return {
                startedAt: this.startedAt,
                endedAt: this.endedAt,
                workouts: workoutsAsJson
            };
        };

        this.fromJson = function (json) {
            this.startedAt = json.startedAt;
            this.endedAt   = json.endedAt;

            if (!json.workouts) {
                return;
            }

            for (var i = 0; i < json.workouts.length; i++) {
                var workout = new Workout();
                workout.fromJson(json.workouts[i]);
                this.addWorkout(workout);
            }
        };
    };
})

.factory('Workout', function(
    WorkoutSet
) {
    return function(name) {
        this.id = new Date().getTime();
        this.name = name;
        this.duration = 0; // number of seconds
        
        var workoutSets = [];

        this.addWorkoutSet = function (set) {
            workoutSets[workoutSets.length] = set;
        };

        this.removeWorkoutSet = function (index) {
            if (index >= workoutSets.length) {
                return;
            }

            workoutSets.splice(index, 1);
        };

        this.getWorkoutSets = function () {
            return workoutSets;
        };

        this.toJson = function () {
            var sets = [];
            for (var i = 0; i < workoutSets.length; i++) {
                sets[i] = workoutSets[i].toJson();
            }

            return {
                name: this.name,
                duration: this.duration,
                workoutSets: sets
            };
        };

        this.fromJson = function (json) {
            this.name = json.name;
            this.duration = json.duration;

            for (var i = 0; i < json.workoutSets.length; i++) {
                var set = new WorkoutSet(
                    json.workoutSets[i].weight, 
                    json.workoutSets[i].reps
                );

                this.addWorkoutSet(set);
            }
        };
    };
})

.factory('WorkoutSet', function() {
    return function(weight, reps) {
        this.weight = weight;
        this.reps = reps;

        this.toJson = function () {
            return {
                weight: this.weight,
                reps: this.reps
            };
        };
    };
})

.service('activeWorkoutSession', function(
    $localstorage
) {
    var workoutSession = null;
    var timer = null;

    this.setWorkoutSession = function (ws) {
        workoutSession = ws;
    };

    this.getWorkoutSession = function () {
        return workoutSession;
    };

    this.setTimer = function (sessionTimer) {
        timer = sessionTimer;
    };

    this.getTimer = function () {
        return timer;
    };

    this.save = function () {
        if (!workoutSession) {
            return;
        }

        var sessions = $localstorage.get('fiziq.workout_sessions', null);
        sessions = !sessions ? workoutSession.id : workoutSession.id + ',' + sessions;

        $localstorage.set('fiziq.workout_sessions', sessions);

        $localstorage.setObject(
            'fiziq.workout_sessions.' + workoutSession.id, 
            workoutSession.toJson()
        );
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

.service('user', function(
    $localstorage
) {
    this.key = null;
    this.name = null;
    this.email = null;

    this.load = function () {
        var data = $localstorage.getObject('fiziq.user.data');
        this.name = data.name;
        this.email = data.email;
    };

    this.isRegistered = function () {
        return 'true' === $localstorage.get('fiziq.user.registered', 'false');
    };

    this.register = function (name, email) {
        this.name = name;
        this.email = email;

        $localstorage.setObject('fiziq.user.data', {
            name : this.name,
            email : this.email
        });
        $localstorage.set('fiziq.user.registered', 'true');
    };
})

.factory('Timer', function(
    $interval
) {
    return function() {
        var timer = new Date(0, 0, 0, 0, 0, 0, 0),
            stop  = null
        ;

        this.start = function() {
            if (stop) {
                return;
            }

            stope = $interval(function() {
                timer.setSeconds(timer.getSeconds() + 1);
            }, 1000);
        };

        this.stop = function() {
            $interval.cancel(stop);
        };

        this.get = function() {
            return timer;
        };
    };
})

.service('loggedWorkoutSessions', function(
    $localstorage,
    WorkoutSession
) {

    this.getLatest = function (count) {
        var result = [];

        var sessions = $localstorage.get('fiziq.workout_sessions', null);
        if (!sessions) {
            return result;
        }

        sessions = sessions.split(',');
        
        if (!count) {
            count = sessions.length;
        } else {
            count = (count >= sessions.length) ? sessions.length : count;
        }

        for (var i = 0; i < count; i++) {        
            var loggedSession = $localstorage.getObject(
                'fiziq.workout_sessions.' + sessions[i]
            );

            var session = new WorkoutSession();
            session.fromJson(loggedSession);

            result[result.length] = session;
        }

        return result;
    };

    this.findWorkout = function (workoutName) {
        var sessions = this.getLatest();

        for (var i = 0; i < sessions.length; i++) {
            var workouts = sessions[i].getWorkouts();
            for (var j = 0; j < workouts.length; j++) {
                if (workouts[j].name === workoutName) {
                    return workouts[j];
                }
            }
        }

        return null;
    };
})

;
