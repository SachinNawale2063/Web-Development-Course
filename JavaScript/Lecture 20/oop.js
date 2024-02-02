// let obj = {
//     a : 1,
//     b : "Sachin"
// }

// console.log(obj);

// let animal = {
//     animal : true
// }

// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__=animal;

class animal{
    constructor(name){
        this.name = name
        console.log('Object is created....');
    }

    eats(){
        console.log('Kha raha hu');
    }
    jumps(){
        console.log('Udya martoy');
    }
}

class Lion extends animal{
    constructor(name){
        super(name)
        console.log('Object is created....');
    }

    eats(){  //Method overriding
        console.log('Mai sher hu bhai me kha raha hu');
    }
}

let a = new animal("Myau");

console.log(a);
console.log(a.name);
console.log(a.eats());
console.log(a.jumps());

let l = new Lion("Sher bhai")
console.log(l);
console.log(l.name);
console.log(l.eats());
console.log(l.jumps());

