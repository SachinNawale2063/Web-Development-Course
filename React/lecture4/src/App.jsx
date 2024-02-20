/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

function App() {
    const [info, setInfo] = useState([])

    useEffect(()=>{
        async function collect(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            // console.log(response);
            const data = await response.json()
            // console.log(data);
            // setInfo(async (info)=>{
            //     info = data
            // })
            // console.log(info);
            setInfo(data)
            // console.log(info);
        }
        collect()
    })

    return (
        <>
        <Navbar/>
        <div className="container">
            {info.map((info)=>{
                return(
                    <Card id={info.id} title={info.title} body={info.body}/>
                )
            })}
        </div>
        </>
    )
}

export default App
