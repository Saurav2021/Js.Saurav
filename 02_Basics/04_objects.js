// const tinderUser = new Object()

const tinderUser={}

tinderUser.id="123acb"
tinderUser.name="sam"
tinderUser.isLOggedIn=false


// console.log(tinderUser);

const regularUser={
    email:"sam@gmail.com",
    fullName:{
        userfullname:
        {
            firstname:"Saurav",
            lastname:"Kumar"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3= {obj1,obj2}
// console.log(obj3);

// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogedIn'));
