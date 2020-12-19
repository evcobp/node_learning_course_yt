const fs = require('fs');
const path = require('path');

//Create folder
//fs.mkdir(
//    path.join(__dirname, '/test'), {}, function(error) {
//    if(error) throw error;
//    console.log('Folder created...');
//});

// Create and write to file
fs.writeFile(
    path.join(__dirname, '/test', 'hello.text'), 
    'Hello World!',
    error => {
        if(error) throw error;
        console.log('File written to...');
        }
    );
    // Append file
    fs.appendFile(
        path.join(__dirname, '/test', 'hello.text'), 
        'I love Node.js',
        error => {
            if(error) throw error;
            console.log('File written to...');
        }
    );

// Read file remember to use 'UTF8' and use data as 2nd parameter

// Rename file