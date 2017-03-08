
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    // Use a character limit
    $scope.characters = 5;


    // Array of rules
    // Javascript objects
    $scope.rules = [
          { rulename: "Must be 5 characters long" },
          { rulename: "Must not be used elsewhere" },
          { rulename: "Must be cool" }
    ];
    console.log($scope.rules);
}]);

