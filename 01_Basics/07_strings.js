const name ="Saurav"
const repoCount = 50

//console.log(name+repoCount+"");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Saurav-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne ="       saurav "
console.log(newStringOne.trim());

const url="https://Saurav.com/saurav%20kumar"

console.log(url.replace('%20','-'));

console.log(url.includes('saurav'));

console.log(url.includes('Amit'));

console.log(gameName.split('-'));