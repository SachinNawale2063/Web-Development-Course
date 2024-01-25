// LOOPS IN JS
// for, while, foreach, forin, forof, dowhile


for (let i = 0; i < 11; i++) {
    console.log(i, ' ');
}

let obj = {
    name: "Sachin",
    role: "Programmer",
    company: "Amazon",
    age: 23
}
for (const key in obj) {
    const element = obj[key];
    console.log(key + ":" + element);
}

for (const c of "Sachin") {
    console.log(c);
}

let i = 0
while (i<4) {
    console.log(i);
    i++;
}