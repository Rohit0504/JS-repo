"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")

//************************************************DataTypes Summary *************************************************************


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
//and you do not need to explicitly declare the type of a variable before using it. You can assign different types
// of values to a variable during its lifetime.
// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean

// On the other hand, statically typed languages require you to declare the variable's type explicitly, 
//and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify 
//the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully.
//Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.



// There are 2 types of datatype in js.
// 1. Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (iska matlab hai empty or zero nahi hai)(standalone value)
//     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
//     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
//     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

const score = 100
const scoreValue = 100.3

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //op=false as symbols are unique.

// const bigNumber = 3456543576654356754n (BigInt)

// 2. Reference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


//               Type                       typeof

// i)            Number                     number
// ii)           String                     string
// iii)          Boolean                    boolean
// iv)           Bigint                     bigint
// v)            Symbol                     symbol
// vi)           Null                       object
// vii)          Undefined                  undefined


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                 typeof

// i)               Object                                object
// ii)              Array                                 object
// iii)             Function                              function(object)



//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory
// a copy is made and changes are not done in original value. 
//Example:-
let valueOne=123
let valueTwo=valueOne
valueTwo=456

console.log(valueOne);// op = 123
console.log(valueTwo);// op = 456


// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory
// original value is passed and changes are done on that original value.
//Example:-
let userOne={
    email:"123@g.com",
    upi:"gpay"
}
let userTwo=userOne
userTwo.email="rohit@g.com"

console.log(userOne.email);// op = rohit@g.com
console.log(userTwo.email);// op = rohit@g.com

// https://262.ecma-international.org/5.1/#sec-11.4.3  (read this for better understanding.)