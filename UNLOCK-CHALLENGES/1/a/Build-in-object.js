// Parent object constructor
function Parent(name) {
this.name = name;
}

// Parent object method
Parent.prototype.sayHello = function() {
console.log("Hello, " + this.name);
};

// Child object constructor
function Child(name, age) {
Parent.call(this, name); // Call the parent constructor to inherit properties
this.age = age;
}

// Set up the prototype chain for inheritance
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// Child object method
Child.prototype.sayAge = function() {
console.log(this.name + " is " + this.age + " years old");
};

// Create instances
var parent = new Parent("John");
var child = new Child("Alice", 10);

// Usage
parent.sayHello(); // Output: Hello, John
child.sayHello(); // Output: Hello, Alice
child.sayAge(); // Output: Alice is 10 years old
