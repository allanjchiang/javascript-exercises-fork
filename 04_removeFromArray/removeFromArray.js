const removeFromArray = function(arr) {
    let values = "";

    for(let i = 1; i < arguments.length; i++) {
        arr.splice(arguments[i], arguments[i].length);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
