// Fiziq - Ionic App

angular.module('fiziq', [
    'ionic',
    'ionic.utils',
    'fiziq.controllers',
    'fiziq.services'
])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.filter('range', function() {
    return function(input, min, max) {
        min = parseInt(min); //Make string input int
        max = parseInt(max);
        for (var i=min; i<max; i++)
            input.push(i);
        return input;
    };
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.selection', {
        url: "/selection/:sessionId",
        views: {
            'menuContent': {
                templateUrl: "templates/selection.html",
                controller: 'SelectionCtrl'
            }
        }
    })

    .state('app.workout', {
        url: "/workout/:sessionId/:workoutId",
        views: {
            'menuContent': {
                templateUrl: "templates/workout.html",
                controller: 'WorkoutCtrl'
            }
        }
    })

    .state('app.done', {
        url: "/done/:sessionId",
        views: {
            'menuContent': {
                templateUrl: "templates/done.html",
                controller: 'DoneCtrl'
            }
        }
    })

    .state('app.history', {
        url: "/history",
        views: {
            'menuContent': {
                templateUrl: "templates/history.html",
                controller: 'HistoryCtrl'
            }
        }
    })

    .state('app.workouts-pool', {
        url: "/workouts-pool",
        views: {
            'menuContent': {
                templateUrl: "templates/workouts_pool.html",
                controller: 'WorkoutsPoolCtrl'
            }
        }
    })

    .state('app.workout-session', {
        url: "/workout-session/:sessionId",
        views: {
            'menuContent': {
                templateUrl: "templates/workout_session.html",
                controller: 'WorkoutSessionCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/selection/0');
})

;
