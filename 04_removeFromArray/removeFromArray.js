const removeFromArray = function(arr, ...manyMoreArgs) {
    const remove = manyMoreArgs;

    for(let i = remove.length - 1; i >= 0; i--){
        arr.splice(remove[i], 1);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
