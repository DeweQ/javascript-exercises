const removeFromArray = function (arr, ...argsToRemove) {
    for (const arg of argsToRemove) {
        while (arr.indexOf(arg) >=0) {
            arr.splice(arr.indexOf(arg), 1);
        }
    }
    return arr;
};
console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
