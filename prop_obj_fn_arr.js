// object properties and methods
var obj = {
	greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);//prop is a variable storing another var greet of obj literal


// functions and arrays
var arr = [];

arr.push(function() {
	console.log('Hello world 1');
});//arr contain a function at first place
arr.push(function() {
	console.log('Hello world 2');
});
arr.push(function() {
	console.log('Hello world 3');
});

arr.forEach(function(item) {
	item();
});//arr can hold any thing
