import mongoose from "mongoose";
import express from 'express';
import { Todo } from "./models/Todo.js";
const app = express()
const port = 3000

let conn = await mongoose.connect("mongodb://localhost:27017/todo")


app.get('/', (req, res)=>{
    const todo = new Todo({name:"My first todo", desc:"Description of this todo", isDone:false})
    todo.save(); //todo database mai save ho jayega
    res.send("Hello World!!")
})
app.get('/a', async (req, res)=>{
    let todo = await Todo.findOne({isDone: false})
    res.json({title: todo.name, desciption: todo.desc, status: todo.isDone})
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})
