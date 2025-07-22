// Data Type converstions

let score="68"
console.log(typeof score); // String

let valueInNumber= Number(score)
console.log(typeof valueInNumber); // Number
console.log(valueInNumber); // this will give me the value in Number itself

// if i change the score to 65avc then it will give me NaN (Not a Number)


let marks=null

console.log(typeof marks); // object
console.log(marks); // this will give me the value in Number itself

let numValue=Number(marks)
console.log(typeof numValue); // Type will be Number
console.log(numValue); // this gives the output as 0


// "33" -> 33
// "33abc" -> NaN
// true -> 1
// false -> 0

let isLoggedIn;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true
// 0 -> false
//"" -> false
//"abc" -> true


