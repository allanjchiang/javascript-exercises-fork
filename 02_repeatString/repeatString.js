let randomNum;
let string;
let num;

function generateRandomNumber() {
    randomNum = Math.floor(Math.random() * 1000);
    return randomNum;
}

function repeatString() {
    for(let i = 0; i < generateRandomNumber(); i++) {
        string += "hey";
    }

    return string;
}

// Do not edit below this line
module.exports = repeatString;
