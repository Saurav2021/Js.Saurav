function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }


function addTwoNumbers(number1,number2){

    //  let result = number1+number2
    //  console.log("Saurav")
    //  return result

    return number1+number2    
}


// addTwoNumbers(8,"3");
// addTwoNumbers(8,"a");
// addTwoNumbers(8,null);

const result =addTwoNumbers(4,2)

// console.log("Results: ",result);

function loginUserMessage(username){
    if(username==undefined){
        console.log("Please Enter a Valid Username");
        return
    }
    return `$(username) just logged in`
}
// console.log(loginUserMessage("Saurav"));
//      console.log(loginUserMessage())


function calculatePrice(val1,val2,...num1){
    return num1
}
// console.log(calculatePrice(200,400,500,3000));

const user ={
    username:"Saurav",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price  is ${anyobject.price}`);
}
// handleObject(user);

handleObject({
    username:"sam",
    price: 400
})

const myNewArray =[200,400,100,500]

function retuenSecondValue(getArray){
    return getArray[1]
}

// console.log(retuenSecondValue(myNewArray));
console.log(retuenSecondValue([29,38,47,63,92]));