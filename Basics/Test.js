console.log("Hello Hackers!")

// Variables and Contants

const accountId=144553
let accountEmail="dumma@dablya.com"
var accountPassword="123456" 
/* 
now adays we don't use it as we have scope issues 
prefer not to use var because of issue in block scope and functional scope

*/

accountCity="Mysore" // this is not a right way to declare a variable

let accountStatus; // this containes the undefined value

// accountId=125431 // Can't be modified as it is a constant variable
console.log(accountId)

// Instead of printing all the variables one by one using console log we can use table method
console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus])