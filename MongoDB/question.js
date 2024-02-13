// Generate Dummy data in collection called emplorees in db called company

// {
//     name: "Sachin",
//     salary: 4500000000,
//     language: "python",
//     city:"Mumbai",
//     isManager: true
// }

// generate 10 such records when a button called generate data is clicked
// create express app with mongoose to achieve it
// every time the button is clickedm you should clear the collection

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")

conn = mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}


app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    // Clear the collection Employee
    await Employee.deleteMany({}) 
    // Generate random data

    let randomNames = ['Rohan', "Sohan", "Mohan", "Sobhan"]
    let randomLang = ["Python", "js", "C++", "Java"]
    let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]
    for (let index = 0; index < 2; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })
        console.log(e)
 

    }

    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})