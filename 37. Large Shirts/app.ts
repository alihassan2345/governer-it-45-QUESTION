// Define the function make_shirt with default values
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`T-Shirt Size: ${size}`);
    console.log(`Message: ${message}`);
    console.log(`Summary: A ${size}-sized shirt with the message "${message}" will be printed.`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("Medium");

// Create a shirt of any size with a different message
make_shirt("Small", "TypeScript is fun!");
