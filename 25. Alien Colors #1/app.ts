// Version that passes the if test (green alien)
let alien_color_pass: string = 'green';

if (alien_color_pass === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Version that fails the if test (yellow or red alien)
let alien_color_fail: string = 'red'; // Change this to 'yellow' for the yellow alien version

if (alien_color_fail === 'green') {
    console.log("Congratulations! You just earned 5 points."); // This will not be executed for yellow or red alien
}
