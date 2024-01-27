
let adj = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let ShopName = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
}

let AnotherWord = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let rand1 = randomNumber(1,3)
let rand2 = randomNumber(1,3)
let rand3 = randomNumber(1,3)

console.log(`Random Numbers : ${rand1} ${rand2} ${rand3}`);

console.log(`Business Name is : ${adj[`${rand1}`]} ${ShopName[`${rand2}`]} ${AnotherWord[`${rand3}`]}`);