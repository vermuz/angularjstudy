// Module App and the Controller

// App
// Loading app and dependencies
// var myApp = angular.module('myApp', []);

// Adding dependencies (in the modules list)
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// Controller
// Pass Controller function an object
// Using AngularJS log service
// AngularJS loads up the function as a string and pases
// parameters list - on seeing scope, it will provide that
// object
myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    // Log and Scope were injected into the controller
    // console.log($scope);
    // console.log($log);
    //
    // Using the log service
    //$log.log("Hello.");
    //$log.info("This is some information");
    //$log.info("Warning");
    //$log.debug("Some debug information while writing my code.");
    //$log.error("This was an error!!!");
    // Using the filter service
    //
    
    // Angular has a lot of services, do not try to reinvent the wheel
    // if a service already exists
    // Use filter
    //$scope.name = 'Mani';
    //$scope.formattedname = $filter('uppercase')($scope.name);
    //$log.info($scope.name);
    //$log.info($scope.formattedname);
    //
    //
    //-----------------------------
    // Angular Resource
    console.log($resource);

});


// Changing order of params makes no difference
// Can make any of the services available to my app via
// function parameters, thanks to angularjs dependency injection
// myApp.controller('mainController', function($log, $scope) {
// 
// All services are named as a module, ng-something
//


// After adding anguler-messages, it becomes available to me


