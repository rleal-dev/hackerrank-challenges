// https://www.hackerrank.com/challenges/js10-function/problem

/*
 * Create the function factorial here
 */
function factorial(number) {
    let result = number;
    if (number === 0 || number === 1) {
        return 1;
    }
        
    while (number > 1) { 
        number--;
        result *= number;
    }

    return result;
}

console.log(factorial(4));