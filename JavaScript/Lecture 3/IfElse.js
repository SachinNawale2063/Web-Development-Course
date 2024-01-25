let age = 45;

if (age>18) {
    console.log("You can drive");
}
else{
    console.log("You can not drive..");
}

let num = 2;
let power = 2;

console.log(num ** power);

// === type and value both check

// Ternary Operator
let a = 6;
let b = 8;
let c = a>b ? (a-b) : (b-a); 
// agar a greater than b hoga to c gets a value of a-b 
// and a is not greater than b hoga to its gets a value og b-a
console.log(c);
