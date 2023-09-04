let randomNum;
let string = "hey";

function generateRandomNumber() {
    const number = Math.floor(Math.random() * 1000);
    return number;
}

function repeatString() {
    string.repeat(generateRandomNumber());
}

// Do not edit below this line
module.exports = repeatString;
