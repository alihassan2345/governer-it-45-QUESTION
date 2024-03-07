let car: string = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 2
console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');

// Test 3
console.log("Is car.length > 0? I predict True.");
console.log(car.length > 0);

// Test 4
console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));

// Test 5
console.log("Is car.includes('bar')? I predict True.");
console.log(car.includes('bar'));

// Test 6
console.log("Is car == 'Subaru'? I predict False.");
console.log(car === 'Subaru');

// Test 7
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Test 8
console.log("Is car.length < 3? I predict False.");
console.log(car.length < 3);

// Test 9
console.log("Is car.endsWith('aru')? I predict False.");
console.log(car.endsWith('aru'));

// Test 10
console.log("Is car == null? I predict False.");
console.log(car == null);
