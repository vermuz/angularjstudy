
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    // Angular adds handle variable and lowercasehandle function to the watchlist
    // the digest loop keeps track of if something has changed
    $scope.handle = '';
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    // Although not something we do often, we can explicitly add something to the watchlist
    // This function will run whenever handle changes
    $scope.$watch('handle', function(newValue, oldValue) {
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
    });

    // Anything outside AngularJS context, will be ignored
    // Set a timeout and change value after few seconds
    setTimeout(function() {
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
    }, 3000);

    setTimeout(function() {
        // Tell AngularJS that whatever, I am doing here,
        // should kick off a digest cycle
        $scope.$apply(function() {
            $scope.handle = 'newtwitterhandle';
            console.log('Scope changed!');
        });
    },3000);

}]);

