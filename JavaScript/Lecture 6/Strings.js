// JAVASCRIPT STRINGS
// NOTE: Strings are immutable
// Thats is once a strings get declared it got stored in memory then we cannot change that original string we can make a multiple copy of that and work on that only...

console.log("This is Stringss Tutorial");

let a = "Sachin";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[6]);

console.log(a.length);

let real_name = "sachin"
let friend = "sanket"
console.log("His name is "+ real_name +" his friend name is "+friend);
console.log(`His name is ${real_name} and his friend name is ${friend}`);  //String Interpolation


let b = "abc"
console.log(b.toUpperCase());

// slice method
let c = "abcdefghijklmnopqrstuvwxyz";
console.log(c.slice(1,5));   //1 included 5 not included
console.log(c.slice(3));

console.log(c.replace("ab", "12")); // agar multiple occuranance rahenge to only first occurance gets change

console.log(c.concat(b));

// to remove white spaces use trim
let d = "    asdf"
let e = d.trim()
console.log(e);

console.log(d.startsWith("a"));
console.log(e.startsWith("a"));
console.log(d.endsWith("f"));