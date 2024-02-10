// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

let testFolder = 'C:\\Users\\Sachin\\OneDrive\\Desktop\\Web Development\\Node js\\question 1\\testFolder'
const fs = require('fs')
const path = require('path')

fs.readdir(testFolder, (err, files) => {
    files.forEach(async file => {
        let name = file
        let extensionname = (path.extname(testFolder + `\\${file}`)).slice(1,)
        // console.log(name);
        fs.mkdirSync('C:\\Users\\Sachin\\OneDrive\\Desktop\\Web Development\\Node js\\question 1' + `\\${extensionname}`)
        fs.renameSync(`C:\\Users\\Sachin\\OneDrive\\Desktop\\Web Development\\Node js\\question 1\\testFolder\\${name}`, `C:\\Users\\Sachin\\OneDrive\\Desktop\\Web Development\\Node js\\question 1\\${extensionname}\\${name}`)
    });
});

// (path.extname(testFolder + `\\${file}`)).slice(1,)