const sumAll = function(min, max) {
    let summedNum = 0;
    if (typeof min === 'string' || typeof max === 'string') {
        summedNum = "ERROR";
    } else if (min < 0 || max < 0) {
        summedNum = "ERROR";
    } else if (max > min) {
        for(let i = 0; i <= max; i++) {
            summedNum += i;
        }
    } else if (min > max) {
        for(let i = 0; i <= min; i++){
            summedNum += i;
        }
    }    
    return summedNum;
};

// Do not edit below this line
module.exports = sumAll;
