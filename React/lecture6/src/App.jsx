/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
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
])

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
