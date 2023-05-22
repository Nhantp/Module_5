function fibonacciSum(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n) + fibonacciSum(n - 1);
    }
}

function fibonacci(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
const n = 20;
const sum = fibonacciSum(n);
console.log(`Tổng của ${n} số Fibonacci là: ${sum}`);
