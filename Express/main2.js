const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

// app.use(express.static('public'))

app.use((req, res, next)=>{ 
    console.log(req.url);             // It is a middleware 1
    console.log(req.headers);
    req.sachin = "I am Sachin"
    // console.log('LOGGED m1');
    fs.appendFileSync('temp.txt', `${Date.now()} is a ${req.method}\n`)
    // console.log(`${Date.now()} is a ${req.method}`);
    // res.send('Hello World!')              //res send kiya to idhar hi ruk jayega or error ayega
    next()                            // agar maine next nahi diya to request yehi pe ruk jayegi
})
app.use((req, res, next)=>{              // It is a middleware 2
    console.log('LOGGED m2');
    next()
})

app.get('/', (req, res)=>{
    res.send(`Hello World! \n ${req.sachin}`)
})
app.get('/about', (req, res)=>{
    res.send('Hello about!')
})
app.get('/contact', (req, res)=>{
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// middleware modified request
// Middleware is a software layer that acts as a mediator between data and a website's user interface. It's often called the "glue" that connects different software platforms and devices

//TYPES
// 1. application level middleware
// 2. router level middleware
// 3. error handling middleware
// 4. built in middleware
// 5. Third party middleware