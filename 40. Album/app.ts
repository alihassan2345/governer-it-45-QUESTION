// Define the function make_album with an optional parameter for the number of tracks
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };

    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Make three dictionaries representing different albums
const album1 = make_album("Artist1", "Album One");
const album2 = make_album("Artist2", "Album Two", 12);
const album3 = make_album("Artist3", "Album Three", 8);

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
