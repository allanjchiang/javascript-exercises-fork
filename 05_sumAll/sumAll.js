const sumAll = function(min, max) {
    let summedNum = 0;
    if (max > min) {
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
