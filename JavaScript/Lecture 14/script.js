
// let a = document.querySelector(".box")
// let b = document.querySelector(".container")

// console.log(a.innerHTML);
// console.log(b.innerHTML);   
// console.log(b.textContent);  //Hey I am a box
// console.log(b.outerHTML);
// console.log(b.tagName);
// console.log(a.nodeName);
// console.log(b.hidden);
// // b.hidden = true
// // console.log(b.hidden);

// a.innerHTML = "Hey i changed innerHtml"

// console.log(a.hasAttribute("style"));  //false
// a.style.backgroundColor = "red"
// a.style.color = "white"
// console.log(a.hasAttribute("style"));   //true

// console.log(a.getAttribute("style"));   

// b.setAttribute("style", "display:flex;")

// console.log(b.attributes);

// b.removeAttribute("style")

console.log(document.querySelector(".container").className);

console.log(document.querySelector(".container").classList);

document.querySelector(".container").classList.add("sachin")
console.log(document.querySelector(".container").classList);

document.querySelector(".container").classList.remove("sachin")

document.querySelector(".container").classList.toggle("sachin")
console.log(document.querySelector(".container").classList);
