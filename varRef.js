// bad
var a = 1;
var b = 2;

//good
const a = 1;
const b = 1;

// bad
var count = 1;
if (true) {
  count += 1;
}

//good
let count = 1;
if (true) {
  count += 1;
}

// bad
const myFunc = ()=>{
    let a = 1;
    const b = 1;
    var c = 1;
}

console.log(a);
console.log(b);
console.log(c)

//good
let a = 1;
const b = 1;
let c = 1;

console.log(a);
console.log(b);
console.log(c)

//bad - Names
let x = 0;
const numerofitems = 1;

//good
let counter = 0;
const numeroFitems = 1;
