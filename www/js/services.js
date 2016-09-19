angular.module('fiziq.services', [])

.value('muscleGroups', [
    {label: 'Chest'},
    {label: 'Shoulders'},
    {label: 'Back'},
    {label: 'Biceps'},
    {label: 'Triceps'},
    {label: 'Legs'},
    {label: 'Abs'}
])

.value('workouts', {
    'Chest' : [
        {
            images: ['img/workout-icon.jpg'],
            label: 'Barbell Flat Bench Press',
            muscle_group: 'Chest'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Barbell Incline Bench Press',
            muscle_group: 'Chest'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Dumbbell Flat Bench Press',
            muscle_group: 'Chest'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Dumbbell Incline Bench Press',
            muscle_group: 'Chest'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Decline Dumbbell Bench Press',
            muscle_group: 'Chest'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Flat Bench Dumbbell Fly',
            muscle_group: 'Chest'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Incline Dumbbell Fly',
            muscle_group: 'Chest'
        },
        {
            images: ['img/decline-dumbbell-flyes.png'],
            label: 'Decline Dumbbell Fly',
            muscle_group: 'Chest'
        },
        {
            images: ['img/cable-crossover.png'],
            label: 'Cable Crossovers',
            muscle_group: 'Chest'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Dumbbell Pullover',
            muscle_group: 'Chest'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Parallel Bar Dip',
            muscle_group: 'Chest'
        }
    ],
    'Shoulders' : [
        {
            images: ['img/workout-icon.jpg'],
            label: 'Seated Dumbbell Press',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Front Raises',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Lateral Raises',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Reverse Flyes',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Single Arm Lateral Raise With Dumbbell',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Upright Cable Rows',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Upright Barbell Rows',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Seated Military Press On Smith Machine (Front)',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Seated Military Press On Smith Machine (Back)',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Military Shoulder Barbell Presses (Front)',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Military Shoulder Barbell Presses (Back)',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Single Side Cable Lateral Raise',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Standing Shrugs with Dumbbells',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Standing Shrugs with Barbell',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/face-pull-1.jpg', 'img/face-pull-2.jpg'],
            label: 'Face Pull',
            muscle_group: 'Shoulders'
        },
        {
            images: [
                'img/side-laterals-to-front-raises-1.jpg',
                'img/side-laterals-to-front-raises-2.jpg',
                'img/side-laterals-to-front-raises-3.jpg',
                'img/side-laterals-to-front-raises-4.jpg'
            ],
            label: 'Side Laterals to Front Raises',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Smith Machine Shrugs',
            muscle_group: 'Shoulders'
        },
        {
            images: ['img/seated-shoulder-press-machine.jpg'],
            label: 'Seated Machine Shoulder Presses',
            muscle_group: 'Shoulders'
        }
    ],
    'Back' : [
        {
            images: ['img/workout-icon.jpg'],
            label: 'Pull-Ups',
            muscle_group: 'Back'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Wide-Grip Lat Pulldown',
            muscle_group: 'Back'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'One-Arm Dumbbell Rows',
            muscle_group: 'Back'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Seated Cable Rows',
            muscle_group: 'Back'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Back Extensions',
            muscle_group: 'Back'
        },
        {
            images: ['img/machine-back-extension.jpg'],
            label: 'Machine Back Extensions',
            muscle_group: 'Back'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Straight-Arm Pulldowns',
            muscle_group: 'Back'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Bent-over Barbell Rows',
            muscle_group: 'Back'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Deadlifts',
            muscle_group: 'Back'
        },
        {
            images: ['img/t-bar-row-with-handle.png'],
            label: 'T-Bar Row with Handle',
            muscle_group: 'Back'
        }
    ],
    'Biceps' : [
        {
            images: ['img/workout-icon.jpg'],
            label: 'Seated Alternate Dumbbell Curl',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Barbell Curls',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Preacher Curls',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Concentration Curls',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Dumbbell Becips Curls',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Cable Curls',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Hammer Curls',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Seated Inclined Biceps Curls',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Lying Dumbbell Biceps Curls',
            muscle_group: 'Biceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Close Grip Chin Ups',
            muscle_group: 'Biceps'
        }
    ],
    'Triceps' : [
        {
            images: ['img/workout-icon.jpg'],
            label: 'Lying Triceps Presses',
            muscle_group: 'Triceps'
        },
        {
            images: ['img/tricep-dumbbell-kickback.png'],
            label: 'Triceps Kickbacks',
            muscle_group: 'Triceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Triceps Pushdowns',
            muscle_group: 'Triceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Overhead Rope Extensions',
            muscle_group: 'Triceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Bench Dips',
            muscle_group: 'Triceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Dips on the Dip Machine',
            muscle_group: 'Triceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Close Grip Bench Press',
            muscle_group: 'Triceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'One Arm Dumbbell Extension',
            muscle_group: 'Triceps'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Seated Triceps Dumbbell Extension',
            muscle_group: 'Triceps'
        }
    ],
    'Legs' : [
        {
            images: ['img/workout-icon.jpg'],
            label: 'Barbell Squats',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Leg Presses',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Leg Extensions',
            muscle_group: 'Legs'
        },
        {
            images: ['img/dumbbell-lunges.png'],
            label: 'Dumbbell Lunges',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Sissy Squat',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Lying Leg Curls',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Seated Calf Raises',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Standing Heel Raises',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Squats on Smith Machine',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Stift-leg Deadlifts',
            muscle_group: 'Legs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Glute Machine',
            muscle_group: 'Legs'
        }
    ],
    'Abs' : [
        {
            images: ['img/workout-icon.jpg', 'img/workout-icon.jpg'],
            label: 'Floor Crunches',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Incline Knee Raises',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Decline Crunches',
            muscle_group: 'Abs'
        },
        {
            images: ['img/incline-situps.png'],
            label: 'Incline Sit Ups',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Hanging Knee Raises',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Reverse Crunches',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Cable Crunches',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'The Swiss ball crunch',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Knee Raises',
            muscle_group: 'Abs'
        },
        {
            images: ['img/lying-leg-raises-s1.png', 'img/lying-leg-raises-s2.png'],
            label: 'Lying Leg Raise',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Vertical Leg Raises',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Plank',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Dumbbell side bends',
            muscle_group: 'Abs'
        },
        {
            images: ['img/workout-icon.jpg'],
            label: 'Vacuum',
            muscle_group: 'Abs'
        },
        {
            images: ['img/side-bends-at-hyperextension.png'],
            label: 'Side Bends at Hyperextension',
            muscle_group: 'Abs'
        },
        {
            images: ['img/cable-kneeling-crunch.png'],
            label: 'Cable Kneeling Crunches',
            muscle_group: 'Abs'
        },
        {
            images: ['img/abdominal-air-bike-1.png', 'img/abdominal-air-bike-2.png'],
            label: 'Abdominal Air Bike',
            muscle_group: 'Abs'
        },
        {
            images: ['img/plank-with-arm-raise-1.png', 'img/plank-with-arm-raise-2.png', 'img/plank-with-arm-raise-3.png'],
            label: 'Plank with Arm Raise',
            muscle_group: 'Abs'
        },
        {
            images: ['img/side-plank-1.png'],
            label: 'Side Plank',
            muscle_group: 'Abs'
        }
    ]
})

.factory('WorkoutSession', function(
    workouts,
    Workout
) {

    function hasMuscleGroupWorkout(muscleGroup, workout) {
        var muscleGroupWorkouts = workouts[muscleGroup];
        if (!muscleGroupWorkouts) {
            return false;
        }

        for (var i = muscleGroupWorkouts.length - 1; i >= 0; i--) {
            if (muscleGroupWorkouts[i].label.toLowerCase() === workout.name.toLowerCase()) {
                return true;
            }
        }

        return false;
    }

    return function() {
        var d = new Date();
        this.id = d.getTime();
        this.startedAt = d;
        this.endedAt = null;

        var workouts = [];

        this.addWorkout = function (workout) {
            workouts[workouts.length] = workout;
        };

        this.removeWorkout = function (workout) {
            for (var i = 0, l = workouts.length; i < l; i++) {
                if (workouts[i].id === workout.id) {
                    workouts.splice(i, 1);

                    return;
                }
            }
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
                id: this.id,
                startedAt: this.startedAt,
                endedAt: this.endedAt,
                workouts: workoutsAsJson
            };
        };

        this.fromJson = function (json) {
            this.id        = json.id ? json.id : this.id;
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

        this.isValid = function () {
            return 0 != workouts.length;
        };

        this.hasWorkout = function (workout) {
            for (var i = 0, l = workouts.length; i < l; i++) {
                if ((workouts[i].id === workout.id) || (workouts[i].name === workout.name)) {
                    return true;
                }
            }

            return false;
        };

        this.replaceWorkout = function (workout) {
            for (var i = 0, l = workouts.length; i < l; i++) {
                if (workouts[i].id === workout.id) {
                    workouts[i] = workout;

                    return;
                }
            }
        };

        this.findWorkoutByName = function(workoutName) {
            for (var i = 0, l = workouts.length; i < l; i++) {
                if (workouts[i].name === workout.name) {
                    return true;
                }
            }

            return false;
        };

        this.pruneWorkouts = function() {
            for (var i = 0; i < workouts.length; i++) {
                if (!workouts[i].isValid()) {
                    workouts.splice(i, 1);
                }
            }
        };

        this.hasWorkoutForMuscleGroup = function(muscleGroup) {
            for (var i = workouts.length - 1; i >= 0; i--) {
                if (!workouts[i].muscleGroup) {
                    // search through workouts list for legacy cases
                    if (hasMuscleGroupWorkout(muscleGroup, workouts[i])) {
                        return true;
                    }

                    continue;
                }

                if (workouts[i].muscleGroup.toLowerCase() === muscleGroup.toLowerCase()) {
                    return true;
                }
            }

            return false;
        };
    };
})

.factory('Workout', function(
    WorkoutSet
) {
    return function(name, muscleGroup) {
        this.id = new Date().getTime();
        this.name = name;
        this.muscleGroup = muscleGroup;
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

        this.isValid = function() {
            return 0 !== workoutSets.length && 0 < this.duration;
        };

        this.toJson = function () {
            var sets = [];
            for (var i = 0; i < workoutSets.length; i++) {
                sets[i] = workoutSets[i].toJson();
            }

            return {
                id: this.id,
                name: this.name,
                muscle_group: this.muscleGroup,
                duration: this.duration,
                workoutSets: sets
            };
        };

        this.fromJson = function (json) {
            this.id   = json.id ? json.id : this.id;
            this.name = json.name;
            this.muscleGroup = json.muscle_group;
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

        this.toJson = function() {
            return {
                weight: this.weight,
                reps: this.reps
            };
        };

        this.isValid = function() {
            return angular.isNumber(this.weight) && angular.isNumber(this.reps);
        }
    };
})

.service('activeWorkoutSession', function(
    $localstorage,
    WorkoutSession,
    Timer
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
        if (!workoutSession || !workoutSession.isValid()) {
            return;
        }

        workoutSession.pruneWorkouts();

        var sessions = $localstorage.get('fiziq.workout_sessions', null);
        sessions = !sessions ? workoutSession.id : workoutSession.id + ',' + sessions;

        $localstorage.set('fiziq.workout_sessions', sessions);

        $localstorage.setObject(
            'fiziq.workout_sessions.' + workoutSession.id,
            workoutSession.toJson()
        );
    };

    this.store = function () {
        if (!workoutSession || !workoutSession.isValid()) {
            return;
        }

        var session = {
            timer: timer.toJson(),
            session: workoutSession.toJson()
        };
        $localstorage.setObject('fiziq.active_workout_session', session);
    };

    this.load = function () {
        if (workoutSession) {
            return workoutSession;
        }

        var session = $localstorage.getObject('fiziq.active_workout_session');
        if (angular.equals({}, session)) {
            return null;
        }

        workoutSession = new WorkoutSession();
        workoutSession.fromJson(session.session);

        timer = new Timer();
        timer.fromJson(session.timer);

        return workoutSession;
    };

    this.terminate = function() {
        workoutSession = null;
        $localstorage.remove('fiziq.active_workout_session');
    };
})

.service('activeWorkout', function(
    $localstorage,
    Workout
) {
    var workout = null;

    this.setWorkout = function (w) {
        workout = w;
    };

    this.getWorkout = function () {
        return workout;
    };

    this.store = function () {
        if (!workout) {
            return;
        }

        $localstorage.setObject('fiziq.active_workout', workout.toJson());
    };

    this.load = function () {
        if (workout) {
            return workout;
        }

        var w = $localstorage.getObject('fiziq.active_workout');
        if (angular.equals({}, w)) {
            return null;
        }

        workout = new Workout();
        workout.fromJson(w);

        return workout;
    };

    this.terminate = function() {
        workout = null;
        $localstorage.remove('fiziq.active_workout');
    };
})

.service('user', function(
    $localstorage,
    WorkoutsPool
) {
    var key = null,
        name = null,
        email = null,
        workoutsPool = null
    ;

    function load() {
        var data = $localstorage.getObject('fiziq.user.data');
        name = data.name;
        email = data.email;

        var pool = $localstorage.getObject('fiziq.user.workouts_pool');
        if (pool) {
            workoutsPool = new WorkoutsPool();
            workoutsPool.fromJson(pool);
        }
    }

    this.isRegistered = function () {
        return 'true' === $localstorage.get('fiziq.user.registered', 'false');
    };

    this.register = function (name, email) {
        name = name;
        email = email;

        $localstorage.setObject('fiziq.user.data', {
            name: name,
            email: email
        });
        $localstorage.set('fiziq.user.registered', 'true');
    };

    this.storeWorkoutsPool = function (pool) {
        workoutsPool = pool;
        $localstorage.setObject('fiziq.user.workouts_pool', workoutsPool.toJson());
    };

    this.getWorkoutsPool = function () {
        load();

        return workoutsPool;
    };
})

.factory('Timer', function(
    $interval
) {
    return function() {
        var watch  = new Date(0, 0, 0, 0, 0, 0, 0),
            origin = new Date(),
            timer  = null
        ;

        function tick() {
            watch = new Date(0, 0, 0, 0, 0, 0, 0);
            var now = new Date();

            watch.setMilliseconds(now - origin);
        }

        this.start = function() {
            if (timer) {
                return;
            }

            timer = $interval(function() {
                tick();
            }, 1000);
        };

        this.stop = function() {
            $interval.cancel(timer);
        };

        this.get = function() {
            return watch;
        };

        this.toJson = function() {
            return {
                origin: origin
            };
        };

        this.fromJson = function(data) {
            origin = new Date(data.origin);
            this.start();
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

            result.push(session);
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

    this.removeWorkoutSession = function (id) {
        var sessions = $localstorage.get('fiziq.workout_sessions', null);
        if (!sessions) {
            return;
        }

        // remove the id
        sessions = sessions.split(',');
        for (var i = 0, l = sessions.length; i < l; i++) {
            if (sessions[i] == id) {
                sessions.splice(i, 1);
            }
        };
        $localstorage.set('fiziq.workout_sessions', sessions.join());

        // remove the session itself
        $localstorage.remove('fiziq.workout_sessions.' + id);
    };

    this.findCountOfMuscleGroup = function (muscleGroup) {
        var sessions = this.getLatest();

        var count = 0;
        for (var i = 0; i < sessions.length; i++) {
            if (sessions[i].hasWorkoutForMuscleGroup(muscleGroup)) {
                count++;
            }
        }

        return count;
    };

    this.findCountOfWorkout = function (workout) {
        var sessions = this.getLatest();

        var count = 0;
        for (var i = 0; i < sessions.length; i++) {
            if (sessions[i].hasWorkout(workout)) {
                count++;
            }
        }

        return count;
    };

})

.factory('WorkoutsPool', function(
    Workout
) {

    return function() {

        var workouts = [];

        this.addWorkout = function (workout) {
            workouts.push(workout);
        };

        this.removeWorkout = function (workout) {
            for (var i = 0, l = workouts.length; i < l; i++) {
                if (workouts[i].name.toLowerCase() === workout.name.toLowerCase()) {
                    workouts.splice(i, 1);

                    return;
                }
            }
        };

        this.getWorkouts = function () {
            return workouts;
        };

        this.toJson = function () {
            var workoutsAsJson = [];
            for (var i = 0; i < workouts.length; i++) {
                workoutsAsJson[i] = workouts[i].toJson();
            }

            return {
                workouts: workoutsAsJson
            };
        };

        this.fromJson = function (json) {
            if (!json.workouts) {
                return;
            }

            for (var i = 0; i < json.workouts.length; i++) {
                var workout = new Workout(json.workouts[i].name, json.workouts[i].muscle_group);
                this.addWorkout(workout);
            }
        };

        this.hasWorkout = function (workout) {
            for (var i = 0, l = workouts.length; i < l; i++) {
                if (workouts[i].name.toLowerCase() === workout.name.toLowerCase()) {
                    return true;
                }
            }

            return false;
        };
    };
})

;
