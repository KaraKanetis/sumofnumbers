"use strict";
console.log("✅ JS file is connected and working");
// Sum using a for-loop
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Sum using a while-loop
function sumWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
// Sum using recursion
function sumRecursion(numbers) {
    if (numbers.length === 0)
        return 0;
    return numbers[0] + sumRecursion(numbers.slice(1));
}
// Sum using functional programming (reduce)
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
// Test all the functions
console.log("sumFor:", sumFor([1, 2, 3, 4])); // → 10
console.log("sumWhile:", sumWhile([1, 2, 3, 4])); // → 10
console.log("sumRecursion:", sumRecursion([1, 2, 3, 4])); // → 10
console.log("sumTheFunctionalWay:", sumTheFunctionalWay([1, 2, 3, 4])); // → 10
