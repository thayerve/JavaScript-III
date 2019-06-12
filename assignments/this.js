/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding: When called in the global scope, 'this' refers to the window/console object -- i.e., can be all of JavaScript when the window object is the browser.

* 2. Implicit binding: When used within a function, 'this' refers to the object that function is a method of (i.e., the object that method is being called on).

* 3. New binding: When 'this' is used inside a constructor function, it refers to the object that is being constructed.

* 4. Explicit binding: When using the `call` or `apply` methods, 'this' refers to whatever object is directly passed as the first argument.


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this.numberOfUnicorns); // returns undefined

// Principle 2

// code example for Implicit Binding

const virginia = {
    name: 'virginia',
    sayHey: function() {
        console.log(`Hey there, I'm ${this.name}`)
    }
}

virginia.sayHey();

// Principle 3

// code example for New Binding

function Flower(flowerName) {
    this.name = flowerName;
    this.sway = function(){
        console.log(`${this.name} sways in the breeze.`)
    }
}

const Dandelion = new Flower('dandelion');
console.log(Dandelion);


// Principle 4

// code example for Explicit Binding

// const rose =  Flower.call('rose');

const peony = {
    name: 'peony',
}

function growFlower(){
    console.log(`You watered the ${this.name} and it bloomed!`);
}

growFlower.call(peony);