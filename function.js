// bad
[1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
});

//good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });

// bad
[1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
});

//good
[1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  });

//bad
x = 5;
y = 3;
function sum(){
    return a + b;
}

//good
function sum(a,b){
    return a + b;
}

sum(5,3)