/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Component1 from './components/component1.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { counterContext } from './context/Context.js'

function App() {

  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><div><button onClick={()=>{setCount(count + 1)}}>counter {count}</button></div></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/about",
      element:<> <Navbar/><About/></>
    },
    {
      path: "/user/:username",
      element:<> <Navbar/><User/></>
    },
    {
      path: "/usecontext",
      element:<><counterContext.Provider value={count}><div><button onClick={()=>{setCount(count + 1)}}>counter {count}</button></div> <Component1/></counterContext.Provider></>
    },
])

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
