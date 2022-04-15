const sumAll = function(start, end) {
    // start = 400;
    // end = 10;
    let sum = 0;
    if (start < 0 || end < 0){
        return "ERROR"
    }else if(!Number.isInteger(end) || !Number.isInteger(start)){
        return "ERROR"
    }else if(end < start){
        let holder = start;
        start = end;
        end = holder;
    }

    for (let i = start; i <= end; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
