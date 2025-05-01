// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2025,1,5)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2025,9,0,1,5)
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2025-01-23")
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("12-05-2025")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());

// `${newDate.getDate()}and the time `

newDate.toLocaleString("default",{
    weekday:'long',
    
})