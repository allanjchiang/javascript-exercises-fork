const removeFromArray = function(arr, ...manyMoreArgs) {
    let i = 0;

    while(i < 5) {
        if(i === manyMoreArgs[i]) {
            arr.splice(i, 1);
        }

        i++;
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
