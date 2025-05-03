// Singleton
//Object.create

// objects literals


const mysym=Symbol("key1")


const JsUser={
    name:"Saurav",
    "full name":"Saurav Kumar",
    [mysym]:"mykey1",
    age:20,
    location:"Munger",
    email:"sauravsuz@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mysym)
// console.log(typeof JsUser.mysym)

console.log(JsUser[mysym])

JsUser.email="saurav2029@.com"
// Object.freeze(JsUser)
JsUser.email="saurav328329@.com"
console.log(JsUser);

JsUser.greetings=function(){
    console.log("Hello Js User");
}
console.log(JsUser.greetings);
console.log(JsUser.greetings());

JsUser.greetingsTwo=function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());