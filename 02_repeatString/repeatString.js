let randomNum;
let string;
let number;

function generateRandomNumber() {
    const number = Math.floor(Math.random() * 1000);
}

function repeatString() {
    generateRandomNumber();

    for(let i = 0; i < number; i++) {
        string += "hey";
    }

    return string;
}

// Do not edit below this line
module.exports = repeatString;
