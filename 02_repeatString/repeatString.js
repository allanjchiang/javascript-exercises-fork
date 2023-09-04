let randomNum;
let string;

function generateRandomNumber() {
    const number = Math.floor(Math.random() * 1000);
    return number;
}

function repeatString() {
    for(let i = 0; i < generateRandomNumber(); i++) {
        string += "hey";
    }

    return string;
}

// Do not edit below this line
module.exports = repeatString;
