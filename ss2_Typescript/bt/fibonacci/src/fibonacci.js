function fibonacciSum(n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;   
    }
    else {
        return fibonacci(n) + fibonacciSum(n - 1);
    }
}
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var n = 20;
var sum = fibonacciSum(n);
console.log("T\u1ED5ng c\u1EE7a ".concat(n, " s\u1ED1 Fibonacci l\u00E0: ").concat(sum));
