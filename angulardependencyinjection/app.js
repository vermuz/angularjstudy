// App
var myApp = angular.module('myApp', []);

// Controller
// Pass Controller function an object
// You can add any service by passing it as an object
myApp.controller('mainController', function($scope) {
	
	console.log($scope)
	
});

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation) {
	return 'Mani Ali';
}

// If a function contains a certain name that angular knows about, you can inject using
// that

var searchPeople = function searchPeople($scope, lastName, height, age, occupation) {
	return 'Mani Ali';
}

var searchPeople = function searchPeople(firstName, $scope, height, age, occupation) {
	return 'Mani Ali';
}

console.log(angular.injector().annotate(searchPeople));


