const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{

    let siteName = "Adidas"
    let searchText = "Search Now"

    let arr = [1,54,55]

    res.render("index1", {siteName:siteName, searchText:searchText, arr})
})
app.get('/blog/:slug', (req, res)=>{

    let blogTitle = "Adidas why and when"
    let blogContent = "very goog brand"

    res.render("templates/index1.html", {blogTitle:blogTitle, blogContent:blogContent})
})

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})