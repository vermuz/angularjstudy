// App
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
	$log.info($scope);
});


// Dependency Injection for Minified JS
// Second Method for dependency injection

// Last element of the array is function that defines the controller
// Elements of the array that come before, are parameters that need
// to be passed to the function
//myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
//    $log.info($scope);
//}]);
// -> finishing /function/array/controller

// Minification issues
// Minified code will break app
// myApp.controller("mainController", function(a,b){b.info(a)});

// Proper minification
// Minifier will not touch things in scope
// First elements of the array, will decide what needs to be passed
// to the function
//myApp.controller("mainController", ["$scope", "$log",function(a,b)
//{b.info(a)}]);
//
//






myApp.controller*('mainController', ['$scope', '$log', function($scope, $log) {
    console.log($scope);
}]);

