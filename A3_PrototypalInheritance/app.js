function Person(firstname, lastname, coursename) {
	
	this.firstname = firstname;
    this.lastname = lastname;
    this.coursename = coursename;
	
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    console.log('Welcome to the class: ' + this.coursename);
};

var student1 = new Person('Ambreen', 'Khan', 'JavaScript');
student1.greet();

var student2 = new Person('Abdul', 'Khan', 'Python');
student2.greet();

console.log(student1.__proto__);
console.log(student2.__proto__);
