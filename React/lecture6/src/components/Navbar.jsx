/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

   

  return (
    <nav>
        <div className="logo">
            <span className='heading'>
                My Navbar
            </span>
        </div>
        <ul>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login"><li>Login</li></NavLink> 
          {/* <Link to="/user/:username"><li>User</li></Link>  */}
        </ul>
    </nav>
  )
}

export default Navbar
