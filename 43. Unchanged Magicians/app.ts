// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define the function make_great to modify a copy of the array by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// Create an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn and Teller"];

// Call make_great with a copy of the array to create a new array with "the Great" added
const greatMagicians: string[] = make_great([...magicianNames]);

// Call show_magicians to display the original array
show_magicians(magicianNames);

// Call show_magicians to display the new array with "the Great" added
show_magicians(greatMagicians);
