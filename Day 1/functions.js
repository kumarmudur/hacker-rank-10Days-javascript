/*
 * Create the function factorial here
 */

function factorial(n) {
    let fact = 1;
    if (n <= 1) {
        return 1;
    }
    
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    
    return fact;
}