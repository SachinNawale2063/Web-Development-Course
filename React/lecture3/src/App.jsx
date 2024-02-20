/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar.jsx"

function App() {

  // eslint-disable-next-line no-unused-vars
  const[count, setCount] = useState(0)
  const[color, setColor] = useState(0)

  // jab ye wala component render hoga matlab chalega browser mai tab ye useEffect automatic run hoga 
  // case 1: run on every render
  useEffect(() => {
    alert("Hey this will run on every render")
  })
  // case 2: Run only on first render
  useEffect(() => {
    alert("Welcome to the page this is a first page of my website and this alert run only one time when page is loaded")    
  }, [])
  // case 3: Run only when certain value gets changed
  useEffect(() => {
    alert("Hey I am running because count was changed")
  },[count])


  

  return (
    <>

    

    {count}
    <button onClick={()=>{setCount((count)=>count + 1)}}>Click me</button>
      
    </>
  )
}

export default App
