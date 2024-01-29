// let boxclass = document.getElementsByClassName("box")
let redbox = document.getElementById("red")
let queryselectedbox = document.querySelector(".box1")
let selecetedboxes = document.querySelectorAll(".box")
let tagname = document.getElementsByTagName('div')

// console.log(boxclass); 

// boxclass[2].style.backgroundColor = "yellow"
// boxclass[1].style.backgroundColor = "yellow"
// boxclass[1].style.display = "block"

// redbox.style.backgroundColor = "red"

// queryselectedbox.style.border = "5px solid green"

selecetedboxes.forEach(e => {
    // console.log(e);
    e.style.backgroundColor = "green"
})

console.log(tagname);

console.log(tagname[0].matches(".container"));

console.log(tagname[0].closest("html"));

console.log(tagname[0].contains(tagname[1])); //tagname[0] ka tagname[1] ye child hoga to true return karega

