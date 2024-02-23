const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // recommended

// op = Hello my name is hitesh and my repo count is 50

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]); op= h
// console.log(gameName.__proto__); 


// console.log(gameName.length); op =8
// console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2)); // op= t
console.log(gameName.indexOf('t')); // op=2

const newString = gameName.substring(0, 4)
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); 

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim removes extra spaces from front and back 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // op = https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar')) // false 

console.log(gameName.split('-')); // op = [ 'hitesh', 'hc', 'com' ]