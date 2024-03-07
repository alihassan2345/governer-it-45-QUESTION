// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Use a for loop to print the name of each animal
console.log("Animal Names:");
for (const animal of animals) {
    console.log(animal);
}

// Use a for loop to print a statement about each animal
console.log("\nAnimal Statements:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("\nCommon Characteristic:");
console.log("Any of these animals would make a great pet!");
