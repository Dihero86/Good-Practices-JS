//bad 
function sayHi(name) {
    return 'How are you, ' + name + '?';
}

//good
function sayHi(name) {
    return `How are you, ${name}?`;
}

//bad
const name = "Capt. Janeway";

//good
const name = 'Capt. Janeway';
