const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

// get post put delete
app.get('/', (req, res) => {
    res.send('Hello World!!!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!!!')
})
app.get('/contact', (req, res) => {
    res.send('Hello contact!!!')
})
app.get('/blog', (req, res) => {
    res.send('Hello blog!!!')
})
// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello javascript!!!')
// })
app.get('/blog/:slug/:second', (req, res)=>{
    // console.log(req);

    // for URL this: http://127.0.0.1:3000/blog/sachin/sanket?mode=dark&Region=in
    console.log(req.params);  //{ slug: 'sachin', second: 'sanket' }
    console.log(req.query);  //{ mode: 'dark', Region: 'in' }
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})