
// Everything in Javascript is a function
// even objects are functions

// Person object
var Person = function(firstname, lastname) {
	this.firstname = firstname;
	this.lastname  = lastname;
}

//function logPerson() {
	// Note: logPerson is dependent on variable john
	// Something that changes for john has to be done here, making
	// things complicated
	// Create a new person
	//var john = new Person('John', 'Doe');
	//console.log(john);
//}

// ^^^^ BAD !
// Using dependency injection
// Passing object to the function
// logPerson is now not dependent on how john is created
function logPerson(person) {
	console.log(person);
}

// Angularjs uses dependency injection

//logPerson();

var john = new Person('John', 'Doe');
logPerson(john);

