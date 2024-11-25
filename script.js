function calculateFibonacci() {
    // Get the input value
    let num = document.getElementById("numInput").value;
    num = parseInt(num);

    // Validate input
    if (isNaN(num) || num < 0 || num > 50) {
        document.getElementById("result").textContent = "Please enter a valid number between 0 and 50.";
        return;
    }

    // Calculate Fibonacci
    let result = fibonacci(num);
    
    // Display the result
    document.getElementById("result").textContent = "Fibonacci(" + num + ") = " + result;
}

function fibonacci(num) {
    // Base cases
    if (num === 0) return 0;
    if (num === 1) return 0;  // As per your requirement, Fibonacci(1) is 0
    if (num === 2) return 1;  // Fibonacci(2) is 1

    // Initialize first two Fibonacci numbers
    let a = 0, b = 1;

    // Loop to calculate Fibonacci up to num
    for (let i = 2; i < num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
