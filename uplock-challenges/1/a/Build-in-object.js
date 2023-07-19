// Parent object constructor
// function - block of reusable code that performs a specific task or calculates a value
function Parent(name) {
 // this - When the Parent function is called with new, it creates a new object and assigns the name property to that object using this.name = name.
 this.name = name;
}

// Parent object method
// Parent -
// prototype - object is significant in JavaScript's prototype-based inheritance model. It allows you to add properties and methods to objects created
Parent.prototype.sayHello = function() {
console.log("Hello, " + this.name);
};

// Child object constructor
function Child(name, age) {
       // call - is a method available on functions in JavaScript. It allows you to invoke a function and explicitly specify the context (this).
Parent.call(this, name); // Call the parent constructor to inherit properties
this.age = age;
}

// Set up the prototype chain for inheritance
                  // Object - is a built-in constructor function in JavaScript that creates a new object.
                  // create - is a static method of the Object constructor. It creates a new object with a specified prototype.
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
