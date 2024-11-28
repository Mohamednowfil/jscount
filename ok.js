const largeData = Array(5000000000000000).fill('This is dummy data for size testing.').join('\n');
console.log(largeData); 
const largeDatas = Array(5000000000000000).fill('This is dummy data for size testing.').join('\n');
console.log(largeDatas); 

const largeDataa = Array(5000000000000000).fill('This is dummy data for size testing.').join('\n');
console.log(largeDataa); 

const largeDatab = Array(5000000000000000).fill('This is dummy data for size testing.').join('\n');
console.log(largeDatab); 

const largeDatad = Array(5000000000000000).fill('This is dummy data for size testing.').join('\n');
console.log(largeDatad); 


const largeDatado = Array(500000).fill('This is dummy data for size testing.').join('\n');
console.log(largeDatado); 

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


const fs = require("fs");

const targetSizes = 10 * 1024 * 1024; // 5 MB in bytes
let currentSizes = 0;
let largeStrings = "";

// Generate a large string by repeating a small string
while (currentSizes < targetSizes) {
    largeStrings += "This is a line of text that will be repeated to increase the file size. ";
    currentSizes = Buffer.byteLength(largeStrings, 'utf8');
}

// Write the inflated string to a .js file
fs.writeFileSync("largeFile.js", `// Auto-generated large file\nconst largeString = \`${largeStrings}\`;\n`);
console.log("largeFile.js created with size:", currentSizes / (1024 * 1024), "MB");




// Inflate JavaScript file to approximately 5 MB
const targetSizep = 5 * 1024 * 1024; // 5 MB in bytes
let currentSizep = 0;
let largeStringp = "";

// Generate a large string by repeating a small string
while (currentSizep < targetSizep) {
    largeStringp += "This is a line of text that will be repeated to increase the file size. ";
    currentSizep = new Blob([largeStringp]).size;
}

// Store the inflated string in a variable (won't be used, just to increase size)
let inflatedDatap = largeString;

// Optionally, log the size to the console (just to verify)
console.log("File size (in bytes):", currentSizep);
console.log("File size (in MB):", currentSizep / (1024 * 1024));


const fs = require("fs");

const targetSized = 10 * 1024 * 1024; // 5 MB in bytes
let currentSized = 0;
let largeStringd = "";

// Generate a large string by repeating a small string
while (currentSizeds < targetSizesd) {
    largeStringsd += "This is a line of text that will be repeated to increase the file size. ";
    currentSizesd = Buffer.byteLength(largeStringsd, 'utf8');
}

// Write the inflated string to a .js file
fs.writeFileSync("largeFile.js", `// Auto-generated large file\nconst largeString = \`${largeStrings}\`;\n`);
console.log("largeFile.js created with size:", currentSizesd / (1024 * 1024), "MB");