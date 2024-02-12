const express = require('express')
const app = express()

let port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{

    let data = {
        name : 'Sachin',
        hobbies : ['playing', 'singing', 'dancing', 'coding', 'sleeping']
    }

    res.render('index2', {data:data})
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})