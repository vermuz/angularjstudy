// App
var myApp = angular.module('myApp', []);

// Controller
// Pass Controller function an object
myApp.controller('mainController', function($scope) {
	
	// Scope in this case is the middle bit between
	// controller and the view, in html using this controller
	// This is the data that will go back and forth
	// between the controller and the view

	// Can add variables and functions to the scope
	$scope.name = 'Mani';
	$scope.occupatin = 'Coder';

	$scope.getname = function() {
		return 'Mani Ali';
	}

	$scope.getname();
	
	console.log($scope);
});

