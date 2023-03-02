// bad
const item = new Object();

//good
const item = {};

//bad 
const test = 'test';

const obj = {
    test: test
}

//good
const obj = {
    test,
}

//bad copy
const person = {
    name: 'person',
    age: 20,
    lastName: 'lastname'
}

let newObj = {};

for(key in person){
    newObj[key] = person[key];
}

//good
const person = {
    name: 'person',
    age: 20,
    lastName: 'lastname'
}

let newObj = {...person};


// bad 
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

//good
const bad = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
};

// bad
const items = new Array();

// good
const items = [];

//bad 
const list = [];

list[0] = 'add new element to list';

//good
const list = [];

list.push('new element');


//bad copy
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

//good
const itemsCopy = [...items]


//destructurin obj
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  
    return `${firstName} ${lastName}`;
}

//good
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }

//destructurin array
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

//good
const [first, second] = arr;