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
console.log(loginUserMessage("Saurav"));
     console.log(loginUserMessage())