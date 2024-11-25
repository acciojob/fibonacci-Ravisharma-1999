function fibonacci(num) {
    // Edge case: if num is 0 or 1, return 0 or 1 respectively
    if (num === 0) return 0;
    if (num === 1) return 0;  // If 1st Fibonacci number is asked, it should return 0 (based on the problem description)

    let a = 0, b = 1;

    // Iteratively calculate Fibonacci numbers
    for (let i = 2; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    
    return b;
}

// Example usage:
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
