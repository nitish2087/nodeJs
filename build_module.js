1.
//greet_file.js :
console.log('hello moto!');
//app.js:
require('./greet_file.js');

2.
//greet_file.js :
var greet= function(){
	console.log('hello moto!');
};
module.exports= greet;// making greet method of this file import-able

//app.js:
var greet= require('./greet_file') //or ('./greet_file.js')- directory of file to be imported
greet();//calling greet variable of this file executing whatever imported
