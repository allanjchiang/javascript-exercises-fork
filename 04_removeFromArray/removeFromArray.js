const removeFromArray = function(arr, ...manyMoreArgs) {
    let i = 0;

    while(i < arguments.length) {
        if(i === manyMoreArgs) {
            arr.splice(i, 1);
        }

        i++;
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
