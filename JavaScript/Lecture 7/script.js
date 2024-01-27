

let a = prompt("Enter a first number")
let b = prompt("Enter a ssecond number")
let c = prompt("Enter Operator")

let random = Math.random()

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj(c)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}