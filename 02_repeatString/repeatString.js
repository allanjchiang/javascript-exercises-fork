let randomNum;
let string;

function generateRandomNumber() {
    const number = Math.floor(Math.random() * 1000);
    return number;
}

function repeatString() {
    generateRandomNumber();
}

// Do not edit below this line
module.exports = repeatString;
