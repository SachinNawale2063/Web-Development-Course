const fs = require("fs")

console.log('starting');
// fs.writeFileSync("sachin.txt", "sachin is a good boy")
fs.writeFile("sachin1.txt", "sachin is a good boy2", ()=>{
    console.log('writing is Done');
    fs.readFile("sachin1.txt", (error, data)=>{
        console.log(error);
        console.log(data.toString());
    })

})
console.log('ending');