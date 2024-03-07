// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn and Teller"];

// Call the function to print the names of magicians in the array
show_magicians(magicianNames);
