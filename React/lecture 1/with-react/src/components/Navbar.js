import React from 'react'

const Navbar = (props) => {
  return (
    <nav>
        <div className="logo">{props.logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
