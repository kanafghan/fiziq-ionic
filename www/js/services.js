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
            label : 'Barbell Flat Bench Press'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Barbell Incline Bench Press'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Dumbbell Flat Bench Press'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Dumbbell Incline Bench Press'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Decline Dumbbell Bench Press'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Flat Bench Dumbbell Fly'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Incline Dumbbell Fly'
        },
        {
            images: ['img/decline-dumbbell-flyes.png'],
            label : 'Decline Dumbbell Fly'
        },
        {
            images: ['img/cable-crossover.png'],
            label : 'Cable Crossovers'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Dumbbell Pullover'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Parallel Bar Dip'
        }
    ],
    'Shoulders' : [
        {
            images: ['img/workout-icon.jpg'],
            label : 'Seated Dumbbell Press'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Front Raises'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Lateral Raises'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Reverse Flyes'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Single Arm Lateral Raise With Dumbbell'},
        {
            images: ['img/workout-icon.jpg'],
            label : 'Upright Cable Rows'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Upright Barbell Rows'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Seated Military Press On Smith Machine (Front)'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Seated Military Press On Smith Machine (Back)'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Military Shoulder Barbell Presses (Front)'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Military Shoulder Barbell Presses (Back)'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Single Side Cable Lateral Raise'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Standing Shrugs with Dumbbells'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Standing Shrugs with Barbell'
        },
        {
            images: ['img/face-pull-1.jpg', 'img/face-pull-2.jpg'],
            label : 'Face Pull'
        },
        {
            images: [
                'img/side-laterals-to-front-raises-1.jpg',
                'img/side-laterals-to-front-raises-2.jpg',
                'img/side-laterals-to-front-raises-3.jpg',
                'img/side-laterals-to-front-raises-4.jpg'
            ],
            label: 'Side Laterals to Front Raises'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Smith Machine Shrugs'
        },
        {
            images: ['img/seated-shoulder-press-machine.jpg'],
            label : 'Seated Machine Shoulder Presses'
        }
    ],
    'Back' : [
        {
            images: ['img/workout-icon.jpg'],
            label : 'Pull-Ups'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Wide-Grip Lat Pulldown'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'One-Arm Dumbbell Rows'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Seated Cable Rows'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Back Extensions'
        },
        {
            images: ['img/machine-back-extension.jpg'],
            label : 'Machine Back Extensions'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Straight-Arm Pulldowns'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Bent-over Barbell Rows'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Deadlifts'
        },
        {
            images: ['img/t-bar-row-with-handle.png'],
            label : 'T-Bar Row with Handle'
        }
    ],
    'Biceps' : [
        {
            images: ['img/workout-icon.jpg'],
            label : 'Seated Alternate Dumbbell Curl'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Barbell Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Preacher Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Concentration Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Dumbbell Becips Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Cable Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Hammer Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Seated Inclined Biceps Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Lying Dumbbell Biceps Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Close Grip Chin Ups'
        }
    ],
    'Triceps' : [
        {
            images: ['img/workout-icon.jpg'],
            label : 'Lying Triceps Presses'
        },
        {
            images: ['img/tricep-dumbbell-kickback.png'],
            label : 'Triceps Kickbacks'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Triceps Pushdowns'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Overhead Rope Extensions'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Bench Dips'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Dips on the Dip Machine'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Close Grip Bench Press'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'One Arm Dumbbell Extension'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Seated Triceps Dumbbell Extension'
        }
    ],
    'Legs' : [
        {
            images: ['img/workout-icon.jpg'],
            label : 'Barbell Squats'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Leg Presses'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Leg Extensions'
        },
        {
            images: ['img/dumbbell-lunges.png'],
            label : 'Dumbbell Lunges'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Sissy Squat'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Lying Leg Curls'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Seated Calf Raises'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Standing Heel Raises'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Squats on Smith Machine'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Stift-leg Deadlifts'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Glute Machine'
        }
    ],
    'Abs' : [
        {
            images: ['img/workout-icon.jpg', 'img/workout-icon.jpg'],
            label : 'Floor Crunches'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Incline Knee Raises'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Decline Crunches'
        },
        {
            images: ['img/incline-situps.png'],
            label : 'Incline Sit Ups'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Hanging Knee Raises'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Reverse Crunches'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Cable Crunches'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'The Swiss ball crunch'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Knee Raises'
        },
        {
            images: ['img/lying-leg-raises-s1.png', 'img/lying-leg-raises-s2.png'],
            label : 'Lying Leg Raise'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Vertical Leg Raises'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Plank'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Dumbbell side bends'
        },
        {
            images: ['img/workout-icon.jpg'],
            label : 'Vacuum'
        },
        {
            images: ['img/side-bends-at-hyperextension.png'],
            label : 'Side Bends at Hyperextension'
        },
        {
            images: ['img/cable-kneeling-crunch.png'],
            label : 'Cable Kneeling Crunches'
        },
        {
            images: ['img/abdominal-air-bike-1.png', 'img/abdominal-air-bike-2.png'],
            label : 'Abdominal Air Bike'
        },
        {
            images: ['img/plank-with-arm-raise-1.png', 'img/plank-with-arm-raise-2.png', 'img/plank-with-arm-raise-3.png'],
            label : 'Plank with Arm Raise'
        },
        {
            images: ['img/side-plank-1.png'],
            label : 'Side Plank'
        }
    ]
})

.factory('WorkoutSession', function(
    Workout
) {
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
                duration: this.duration,
                workoutSets: sets
            };
        };

        this.fromJson = function (json) {
            this.id   = json.id ? json.id : this.id;
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
        if (workoutSession) {
            workoutSession.pruneWorkouts();
        }

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
})

;
