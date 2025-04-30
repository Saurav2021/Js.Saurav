 // Primitive

 // 7 Types: String, Number , Boolean , null , Undefined , Symbol , BigInt

const score = 100
const scoore = 100.3

const isLoggedIn=false
const OutsideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

const bigNumber =74373984326799722n


 // Rrference Type (Non-Primitive)

 // Arrays , Objects , Functions


const heros =["Saurav", "Shubham","Shashank"]

// objects
let myObj=
{
    name:"Saurav",
    age:22,
}

const myfunction=function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(typeof OutsideTemp);
console.log(typeof myfunction);
console.log(typeof heros);
console.log(typeof id);