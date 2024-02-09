const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

// get post put delete
app.get('/', (req, res) => {
    console.log('Hey its a get request');
    res.send('Hello World!!!')
})

// post request is use for handling sensitive info which hide our data from storing in link
app.post('/', (req, res)=>{
    console.log('Hey its a post request');
    res.send(`Hello World post request`)
})

// put request use for the update the data in database
app.put('/', (req, res)=>{
    console.log('Hey its a put request');
    res.send(`Hello World put request`)
})

app.get("/index", (req, res)=>{
    console.log('Hey its index');
    // res.send('Hello World index!!!')
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get("/api", (req, res)=>{
    console.log('Hey its json dada');
    res.json({a:1, b:2, c:3})
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})
