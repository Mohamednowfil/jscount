
const largeData = Array(500000).fill('This is dummy data for size testing.').join('\n');
console.log(largeData); 

// Inflate JavaScript file to approximately 5 MB
const targetSize = 5 * 1024 * 1024; // 5 MB in bytes
let currentSize = 0;
let largeString = "";

// Generate a large string by repeating a small string
while (currentSize < targetSize) {
    largeString += "This is a line of text that will be repeated to increase the file size. ";
    currentSize = new Blob([largeString]).size;
}

// Store the inflated string in a variable (won't be used, just to increase size)
let inflatedData = largeString;

// Optionally, log the size to the console (just to verify)
console.log("File size (in bytes):", currentSize);
console.log("File size (in MB):", currentSize / (1024 * 1024));

// The string or data is now large enough to reach approximately 5 MB in size