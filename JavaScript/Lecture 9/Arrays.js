//JAVASCRIPT ARRAYS
//Arrays are mutable that is it can be changed


let arr = [1,2,3,4,5,6]
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
arr[0] = 52;    // string mai aisa nahi kr sakte because it is immutable
console.log(arr[0]);

console.log(typeof arr);   // array ka type object rehta in javascript

console.log(arr.toString());

console.log(arr.join(''));
console.log(arr.join(' and '));

console.log(arr.pop());

console.log(arr.push(100));  //lenght kitni hai wo print hoga and 100 arr ke last mai add hoga

console.log(arr.shift());   // first element remove karega

console.log(arr.unshift(12));  //arr ke start mai 12 add kr dega and length print karega
console.log(arr);

console.log(arr.push('sachin'));
console.log(arr);

console.log(delete arr[5])
console.log(arr);

let a1 = [1,2,3,4,5,6]
let a2 = [1,2,3,4,5,6]
let a3 = [1,2,3,4,5,6]
let a4 = a1.concat(a2,a3);
console.log(a4);
console.log(a4.toString());
console.log(a4.join(' '));

let b = [2,1,3,5,6,3,7,8]
console.log(b.sort());

console.log(a1.splice(1,4));
console.log(a1);

console.log(a2.slice(1,4));
console.log(a2);

console.log(a3.reverse());

a3.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}

for (const iterator of a3) {
    console.log(iterator);
}


let d = [1,2,3,4]
let new_arr = d.map((element, index, array)=>{
    return element**2;
})
console.log(new_arr);



let e = [1,2,3,4,5,6,7]
let greater_than_4 = (e) => {
    if(e>4){
        return true
    }
    return false
}
let k = e.filter(greater_than_4)
let m = e.filter((e) => {
    if(e>4){
        return true
    }
    return false
})
console.log(k);
console.log(m);

let arr2 = [1,2,3,4,5,6,7,8]
const add = (a, b) => {
    return a + b
}
const multiply = (a, b) => {
    return a * b
}
console.log(arr2.reduce(add));
console.log(arr2.reduce(multiply));


console.log(Array.from("SachinNawale"));