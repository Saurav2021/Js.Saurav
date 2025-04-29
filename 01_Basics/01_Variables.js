const account_id = 144553
let account_email ="saurav@gmail.com"
var account_password="12345"
account_city="Jaipur"
let account_state;

// account_id=2         // not allowed

account_email="pk@.com"
account_password="09876"
account_city="Banglore"

console.log(account_id);
 
/*
Prefernot to use var 
because of issue in block scope and functional scope
*/


console.table([account_email,account_password,account_city,account_state])