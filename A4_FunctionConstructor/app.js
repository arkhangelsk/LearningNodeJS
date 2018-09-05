function Person(first, last, age, dept){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.department = dept;
}

var employee1 = new Person("John", "MacDonald", 28, "IT");
var employee2 = new Person("Jason", "Rao", 48, "Accounts");

console.log('Hi ' + employee1.firstName + ' ' + employee1.lastName);
console.log('Welcome to ' + employee1.department + ' department');

console.log('Hi ' + employee2.firstName + ' ' + employee2.lastName);
console.log('Welcome to ' + employee2.department + ' department');



