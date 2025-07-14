const removeFromArray = function( arr, ...argsToRemove) {
    for (let arg in argsToRemove) {
        if (arr.indexOf(arg)>=0)
            arr.splice(arr.indexOf(arg),1);
    }
};

// Do not edit below this line
module.exports = removeFromArray;
