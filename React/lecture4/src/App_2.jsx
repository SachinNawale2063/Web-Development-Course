/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [showBtn, setshowBtn] = useState(true)
    const [todos, settodos] = useState([
        {
            name : "first",
            desc : "This is my first todo"
        },
        {
            name : "second",
            desc : "This is my second todo"
        },
        {
            name : "third",
            desc : "This is my third todo"
        },
        {
            name : "fourth",
            desc : "This is my fourth todo"
        },
    ])

    const Todo = ({todo}) => {
        return (
            <>
                <div className="todo">{todo.name}</div>
                <div className="todo">{todo.desc}</div>
            </>
        )
    }


    return (
        <>
            {showBtn ? <button>Main 1st button hu yaar</button> : "kuch nahi hai bhai idhar"}
            {showBtn && <button>Main 2nd button hu yaar</button>}

            <button onClick={() => { setshowBtn((showBtn) => !showBtn) }}>Controller</button>

            {todos.map(todo=>{
                return <Todo key={todo.name} todo = {todo} />
            })}
        </>
    )
}

export default App
