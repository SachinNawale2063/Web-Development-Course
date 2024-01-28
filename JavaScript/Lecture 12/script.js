
console.log("Hey hi There");

let cont = document.body.childNodes;
console.log(cont);
console.log(typeof cont);    //object


console.log(document.body.childNodes[1].childNodes);

let arr = document.body.childNodes[1]
console.log(arr.firstChild);
console.log(arr.lastChild);

console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.parentElement);

console.log(document.body.firstElementChild.children);
// console.log(document.body.firstElementChild.children);

document.body.firstElementChild.children[1].style.backgroundColor = "yellow"

console.log(document.body.firstElementChild.children[1].nextElementSibling);
console.log(document.body.firstElementChild.children[1].previousElementSibling);
console.log(document.body.firstElementChild.children[1].parentElement);