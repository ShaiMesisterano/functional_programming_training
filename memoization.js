var memo = memo || [];

function daysInMonth(year, month) {
    var _arguments = arguments;
    var memoResult = memo.filter(function (item) {
        return item.input[0] === _arguments[0] && item.input[1] === _arguments[1]
    });
    if (memoResult.length > 0) {
        return "[memo] " + memoResult;
    }

    var start = new Date(year, month + 1, 1),
        end = new Date(year, month, 1);
    var result = (end - start) / (1000 * 60 * 60 * 24);
    memo.push({
        input: arguments,
        output: result
    });

    return result;
}

daysInMonth(2014, 1);
daysInMonth(2014, 2);
daysInMonth(2014, 3);