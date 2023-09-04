let randomNum;
let string;

function generateRandomNumber() {
    randomNum = Math.floor(Math.random() * 1000);
    return randomNum;
}

function repeatString() {
    string = generateRandomNumber();

    return string;
}

// Do not edit below this line
module.exports = repeatString;
