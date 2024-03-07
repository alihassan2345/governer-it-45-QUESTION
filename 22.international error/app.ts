// Define an array of numbers
let numbers = [1, 2, 3, 4, 5,];

// Intentional error: Trying to access an index that doesn't exist
let indexWithError = 10;
let valueAtIndexWithError = numbers[indexWithError];

// Correct the error by checking if the index is within the array bounds
if (valueAtIndexWithError !== undefined) {
  // If the index is valid, log the value
  console.log(`Value at index ${indexWithError}: ${valueAtIndexWithError}`);
} else {
  // If the index is invalid, log an error message
  console.error(`Error: Index ${indexWithError} is out of bounds.`);
}
