// function statement
function greet() {
	console.log('hello');
}
greet();

// functions are first-class
function logGreeting(fn) {
	fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
	console.log('Hii moto!');
}
greetMe();
 
// it's first-class
logGreeting(greetMe);

// use a function expression to create a function on the fly
logGreeting(function() {
	console.log('Hello moto!');
});
