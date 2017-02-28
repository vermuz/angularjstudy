
// var person = 'Steve';

//function logPerson()
//{
//	console.log(person);
//}
//

// Goal not to pollute the global namespace
//------------------------------------------------------------------------------------
// Empty object
var stevesApp = {};
stevesApp.person = 'Steve';

stevesApp.logPerson = function() {
	console.log(stevesApp.person);
}

