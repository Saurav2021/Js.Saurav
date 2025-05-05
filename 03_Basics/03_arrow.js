const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        }
 }
//  user.welcomeMessage()
//  user.username="Saurav"
//  user.welcomeMessage()
// 
// console.log(this)


// function chai(){
//     let username ="saurav"
//     console.log(this)
// }

// chai()



// const chai = function(){
//     let username ="saurav"
//     console.log(this.username);
// }
// chai()



const chai = () => {
    let username ="saurav"
    console.log(this.username);
}
// chai()


// const addTwo=(num1 , num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))


const addTwo=(num1 , num2)=>  num1 + num2

console.log(addTwo(3,4))

const addTwoo=(num1 , num2)=>  (num1 + num2)

const addTwooo=(num1 , num2)=>  ({username:"hitesh"})


// const myArray =[2,5,3,7,8]

// myArray.forEach()