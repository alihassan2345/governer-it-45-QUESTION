// Define the function order_sandwich
function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        console.log("Items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
        console.log("Enjoy your sandwich!");
    }
    console.log("\n");
}

// Call the function three times with different numbers of arguments
order_sandwich("Ham", "Cheese", "Lettuce");
order_sandwich("Turkey", "Swiss");
order_sandwich(); // No items provided in this call
