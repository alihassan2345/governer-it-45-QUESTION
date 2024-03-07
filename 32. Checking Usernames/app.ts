let current_users: string[] = ['user1', 'John', 'Alice', 'Bob', 'Jane'];
let new_users: string[] = ['john', 'Eric', 'Alice', 'mike', 'Sara'];

for (let newUsername of new_users) {
    // Check for case-insensitive uniqueness
    let isUsernameTaken = current_users.some(username => username.toLowerCase() === newUsername.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${newUsername}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUsername}' is available.`);
    }
}
