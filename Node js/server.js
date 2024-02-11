// console.log('Hey Hi Guys!!');

// node js is basically javascript ka v8 engine
//History. Node.js was initially written by Ryan Dahl in 2009, about 13 years after the introduction of the first server-side JavaScript environment, Netscape's LiveWire Pro Web. The initial release supported only Linux and Mac OS X. Its development and maintenance was led by Dahl and later sponsored by Joyent.

//npm stands for Node Package Manager. It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. npm is free and relied on by over 11 million developers worldwide.

var emoji = require('node-emoji')
console.log(emoji.get('unicorn'))
console.log(emoji.get('smile'))
console.log(emoji.get('angry'))
console.log(emoji.get('heart'))





var slugify = require('slugify')
const a = slugify("My name is sachin nawale")   //it separates each word by the dash between them
console.log(a);
const b = slugify("My name is sachin nawale", '_')  //it separates each word by the underscore _ 
console.log(b);


