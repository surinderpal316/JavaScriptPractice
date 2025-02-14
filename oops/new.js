function multiply (num) {
    return num*5
}
// console.log( multiply(10))

multiply.power=2;

//console.log(multiply.power);
//console.log(multiply.prototype);//=> return empty pranthesis

//everything is object in javcascript

function createUser(username,score){
   this.username = username
   this.score = score
};



const chai =  new createUser("chai",25)

const tea = new createUser("tea",250)


createUser.prototype.increment = function() { //=> dont know which to increment  ?? chai or tea
    this.score++
}

 createUser.prototype.printMe = function (){
    console.log(`price is ${this.score}`)
}

//console.log(gg)

console.log(chai);
console.log(tea);

chai.printMe()


/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 

This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.

If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),

the newly created object is returned
*/