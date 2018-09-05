// function statement
function welcome() {
	console.log('Welcome to STT');
}
welcome();

//A Function can be passed as an argument to other functions
function logGreetings(fn) {
	fn();
}
logGreetings(welcome);

//A function can be assigned as a value to a variable.
var welcomeStudent = function(name) {
	console.log('Hi ' + name+ ', Welcome to STT!');
}
welcomeStudent('Mariam');

// use of function expression to create a function on the fly
logGreetings(function() {
	console.log('Hello Mariam!');
});


