// let a =10
// const b =20
// var c =3088

let a =400


if (true){
    let a =10
    const b =20
    // var c =30
    // console.log("Inner:" ,a);
}


// console.log("Outer:" ,a);
// console.log(b);
// console.log(c);


function one(){
    const username="Saurav"

    function two(){
        const website ="Youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()


if(true){
    const username ="Saurav"
    if(username==="Saurav"){
        const website="youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(5));

function addone(num){
    return num+1
}



addTwo(5)

const addTwo=function(num){
    return num +2
}

