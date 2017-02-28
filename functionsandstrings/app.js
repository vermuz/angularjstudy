// App
var myApp = angular.module('myApp', []);

// Controller
// Pass Controller function an object
myApp.controller('mainController', function($scope) {
	
});

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation) {
	return 'Mani Ali';
}

console.log(searchPeople(1,1,1,1,1));


// We can also take a javascript function and convert it into a string
var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);
