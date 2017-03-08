

// Use routing code
var myApp = angular.module('myApp', ['ngRoute']);


// Inject a route provider
myApp.config(function ($routeProvider) {
    // Specify routes
    $routeProvider
    // Setup routes
    .when('/', {
        templateUrl: 'pages/main.html', // View, get this content via js
        controller: 'mainController' // Model
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html', // View, get this content via js
        controller: 'secondController' // Model
    })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

}]);


myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

}]);
