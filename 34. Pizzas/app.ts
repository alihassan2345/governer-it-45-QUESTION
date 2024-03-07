const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print the names of each pizza using a for loop
console.log("Pizza Names:");
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

// Print a sentence about each pizza using the name
console.log("\nPizza Statements:");
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a line outside the loop about how much you like pizza
console.log("\nI really love pizza!");
