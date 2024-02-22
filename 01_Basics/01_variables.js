const accountId = 144553
let accountEmail = "rohit@gmail.com"
var accountPassword = "12345"
accountCity = "Prayagraj"
let accountState;

// accountId = 22222 // not allowed


accountEmail = "rohan@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])