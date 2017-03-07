# angularjstudy

My personal repo of notes on AngularJS.

# AngularJS 
- Model view whatever
- Model <-> View
- Model (app) contains a controller which is used by html which becomes a view once you use ng-app (app name)
and within a view i.e. div (you use ng-controller which comes from the ng-app used at the top)
- All AngularJS services start with a $, i.e $scope

# Code Module Whatever

```
var myApp = angular.module('myApplication', []);
myApp.controller('mainController', function() {
});
```

# Dependency Injection
- Giving a function an object
- Rather can creating an object inside a function, you pass it to the function
This is bad,

```
function logPerson() {
	// Note: logPerson is dependent on variable john
	// Something that changes for john has to be done here, making
	// things complicated
	// Create a new person
	var john = new Person('John', 'Doe');
	console.log(john);
}
```
but this is good !
```
function logPerson(person) {
	console.log(person);
}
var john = new Person('Mani', 'Ali');
logPerson(john);
```
```
// If a function contains a certain name that angular knows about, you can inject using
// that
var searchPeople = function searchPeople($scope, lastName, height, age, occupation) {
	return 'Mani Ali';
}
```
# Scope Service
- It is a big part of the thing that binds model to the view.
- It is an object from scope service.
- It involves dependency injection.
- Scope will show a lot of functions, that is AngularJS doing dependency injection
- Inclusion of $scope in function parameters, leads to AngularJS recognizing that and injecting into the 
function

# Using other angular services (Examples)
- Just add it to the dependency list, like
```
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

# Usage
myApp.controller('mainController', function($scope, $log, $filter, $resource)
```
- You must include supporting files from code.angularjs for your stuff to work
- Angular-Messages (will give you something like form error handling pretty quick)
- Angular-Resource (good at loading resources pretty quick)


# AngularJS Notes 

# Functions inside arrays
```
var example = [1, '2', function() { alert('Hello'); }];
```

# Global Namespace
We can save our global namespace from pollution
```
var person = 'Mani';
function logPerson() {
    console.log(person);
}

vs

```

```
var maniApp = {};
stevesApp.person = 'Mani';

maniApp.logPerson = function() {
	console.log(maniApp.person);
}
```
# Functions and Strings

```
var searchPeople = function searchPeople(firstName, lastName, height, age, occupation) {
	return 'Mani Ali';
}
```
```
// We can also take a javascript function and convert it into a string
var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);
```

# Minification
Shrinking size of falls for faster downloads
file.js -> file.min.js

```
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
   $log.info($scope);
}
Note: Order does not matter
```

vs minified version of controller, but order matters now

This is also the second way of doing dependency injection in Angular

```
myApp.controller('mainController', ["$scope", "$log", function(a,b)
{b.info(a)}]);
```

# Interpolation
Creating a string by combining strings and placeholders

In HTML,
```
Hello {{ name }}!
```

# Directive
Instruction to AngularJS to manipulate a piece of the DOM
e.g. add a class, hide this or create this. 
In Javascript and JQuery we may have achieved, DOM manipulation
in memory but Angular prefers to use directives.
View can change the model (input textbox -> two way binding -> update model -> update the view)

## Model

So in our model, we had,

```
$scope.handle
// This function defined our model
$scope.lowercasehandle = function() {...} 

# Usage
myApp.controller('mainController', ['$scope', '$filter', function($scope,
$filter) {
    $scope.handle = '';
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
}]);
```

```
      <MODEL>
        |
        |
   <Angular>
<provides the bits inbetween>
        |
        |
      <VIEW>
```
## View

Using ng-model directive, we can have two way data binding.
In our view, 

```
<input type="text" ng-model="handle" />
<h1>twitter.com/{{ lowercasehandle() }}</h1>
```

## The Event Loop

On key press, while we are listening for an event,
we respond to it when it happens - it will do that everytime

```
var tb = document.getElementByIdI("name");
tb.addEventListener("keypress",
     function(event) {
         console.log("Pressed");
     });
```

