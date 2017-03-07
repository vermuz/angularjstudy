
var myApp = angular.module('myApp', []);

// Array form of dependency injection
// Using timeout service
myApp.controller('mainController', ['$scope', '$timeout', 
function($scope, $timeout) {

    // On downloading html, angular uses scope to update
    // definition of variables in the browser memory
    // Angular uses this model
    $scope.name = 'Mani';

    // timeout lets us run a function after a certain amount
    // of time
    // In our scope, change the value to everybody from Mani
    $timeout(function() {
        $scope.name = 'Everybody';
    }, 3000);

}]);

