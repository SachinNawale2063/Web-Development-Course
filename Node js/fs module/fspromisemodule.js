// const fs = require("fs/promises")
import fs from 'fs/promises'

let a = await fs.readFile("sachin.txt")

await fs.appendFile("sachin.txt", "\nhello everyone!!!!")

console.log(a.toString());