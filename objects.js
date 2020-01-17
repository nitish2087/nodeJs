				//object_literals:

var person = {
	firstname: 'Nitish',
	lastname: 'Srivastav',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();

console.log(person['firstname']);

				//prototypal inheritance:

function Person(firstname, lastname) {

	this.firstname = firstname;
	this.lastname = lastname;

}

Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var niku = new Person('Nitish', 'Srivastav');
john.greet();

var aku = new Person('Akash', 'Gupta');
jane.greet();

console.log(niku.__proto__);
console.log(aku.__proto__);
console.log(niku.__proto__ === aku.__proto__);
