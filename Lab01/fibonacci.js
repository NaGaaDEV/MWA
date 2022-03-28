const fibonacci = function(number) {
    if(number < 0) {
        number *= -1;
    }
    if(number <= 2) {
        return 1;
    } else {
        return fibonacci(number-1) + fibonacci(number-2);
    }
}
console.log("2. Fibonacci of 30 is "+ fibonacci(30));
console.log("3. Fibonacci of -15 is "+ fibonacci(-15));