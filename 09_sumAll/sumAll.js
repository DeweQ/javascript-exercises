const sumAll = function (start, end) {
    if (start < 0 || end < 0)
        return "ERROR";
    if (!(typeof(start) == typeof(end) == typeof(123)))
        return "ERROR";
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    let result = 0;
    for (let i = start; i <= end; i++)
        result += i;
    return result;
};

sumAll(123, 1);
// Do not edit below this line
module.exports = sumAll;
