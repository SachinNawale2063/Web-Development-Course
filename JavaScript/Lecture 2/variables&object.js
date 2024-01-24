// JAVASCRIPT VARIABLES

// var is globally scoped and
// let and const are the locally scoped

// DATA TYPES :- 
// 1. Primitive Datatypes : Null, Number, String, Symbol, Undefined, Boolean, BigInt
// 2. Object Datatypes : {key : value} pairs

var a = 5;
var b = 6;
var c = "sachin";

console.log(a +b + c);

console.log(typeof a, typeof b, typeof c);

let sachin = 2007;
{
    let sachin = 7002;
    console.log(sachin);  //7002
}
console.log(sachin); //2007

var sanket = 2007;
{
    var sanket = 7002;
    console.log(sanket);  // 7002
}
console.log(sanket);   //7002

let x = "Sachin Nawale"
let y = 22;
let z = 3.55;
let w = true;
let q = undefined;
let r = null;  //type of null object ata hai 
console.log(typeof x, typeof y, typeof z, typeof w, typeof q, typeof r);

let o = {
    "name" : "Sachin Nawale",
    "Sap Id" : "60009210052",
    is_handsome : true
}

console.log(o);
o.class = "D1";
console.log(o);
o.class = "D2";
console.log(o);