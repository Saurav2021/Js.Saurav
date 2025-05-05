// ?? immediately invoked function expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    console.log(`DB CONNECTED`);
})();

// ( ()=> {
//     console.log(`DB CONNECTED TWO`);
// })()

( (name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})(`Saurav`)