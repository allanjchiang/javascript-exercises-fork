let randomNum;
let string;
let num;

function generateRandomNumber() {
    randomNum = Math.floor(Math.random() * 1000);
    return randomNum;
}

function repeatString() {
    generateRandomNumber();

    for(let i = 0; i < randomNum; i++) {
        string += "hey";
    }

    return string;
}

// Do not edit below this line
module.exports = repeatString;
