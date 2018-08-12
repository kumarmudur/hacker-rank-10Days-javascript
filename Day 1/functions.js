/*
 * Create the function factorial here
 */

function factorial(n) {
    let fact = 1;
    if (n <= 1) {
        return 1;
    } else {
        for (let i = 1; i <= n; i++) {
            fact = fact * i;
        }
        return fact;
    }
}

// factorial using recursive function
let factorialRecursive = function(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}
