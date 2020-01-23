                     //pattern 1
//greet1.js
module.exports=function(){
	console.log('hello world');
};

//app.js
var greet= require('./greet1');
greet();

                     //pattern 2
//greet2.js
module.exports.greet=function(){
	console.log('hello');
};

//app.js
var greet2= require('./greet2').greet;
greet2();

                    //pattern 3
//greet3.js(using function constructor)
function Greetr(){
	this.greeting='hello yr';
	this.greet=function(){
		console.log(this.greeting);
	}
}

module.exports = new Greetr();

//app.js
var greet3= require('./greet3');
greet3.greet();
greet3.greeting= 'changed hello yr';//changing value will change values for other objects,bcoz all objects points to this same reference. 

var greet3_=require('./greet3');//but module.exports is called only once
greet3_.greet();

                    //pattern 4
//greet4.js
//function constructor
function Greetr(){
	this.greeting='hello yr';
	this.greet=function(){
		console.log(this.greeting);
	}
}

module.exports= Greetr;

//app.js
var Greet4=require('./greet4');//Greet4 is a constructor function
var grtr= new Greet4();//can create many objects, all are different
grtr.greet();

                   //pattern 5
//greet5.js
var greeting= 'hello niku';
function greet(){
	console.log(greeting);
}
//exposing only fn below, not variable
//variable is not accessible outside the module:  "revealing module pattern"
module.exports={
	gre:greet
};

//app.js(protecting code:revealing module patterns)
var greet5= require('./greet5');
greet5.gre();

