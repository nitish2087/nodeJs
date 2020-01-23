//We have three files in a folder "exp": english.js,spanish.js having same function expression "greet" but different content.
//index.js(third file): to use these two files as a complete module.
//app.js: to perform operation showing functionality of require

//english.js:
var greet= function(){
	console.log('hello');
}

module.exports=greet;

//spanish.js:
var greet= function(){
	console.log('hola');
}

module.exports=greet;

//index.js(module.exports works as an object literal)

var eng=require('./english');
var spa=require('./spanish');

module.exports={
	english:eng,
	spanish:spa
};


//app.js

var greet=require('./exp');//in exp-folder,so apply on all files,when execute index.js, will return object having different value for same fn
//require returns module.exports, so an object literal
greet.english();
greet.spanish();

//output: 
//hello
//hola
