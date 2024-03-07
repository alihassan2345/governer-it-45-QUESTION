// Tests for equality and inequality with strings
let fruit1: string = 'apple';
let fruit2: string = 'orange';

console.log("Are fruit1 and fruit2 equal? I predict False.");
console.log(fruit1 === fruit2);

console.log("Are fruit1 and fruit2 not equal? I predict True.");
console.log(fruit1 !== fruit2);

// Tests using the lower case function
let name1: string = 'John';
let name2: string = 'john';

console.log("Are name1 and name2 equal (case-insensitive)? I predict True.");
console.log(name1.toLowerCase() === name2.toLowerCase());

// Numerical tests
let number1: number = 10;
let number2: number = 5;

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
let sunnyDay: boolean = true;
let weekend: boolean = false;

console.log("Is it a sunny day AND the weekend? I predict False.");
console.log(sunnyDay && weekend);

console.log("Is it a sunny day OR the weekend? I predict True.");
console.log(sunnyDay || weekend);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
