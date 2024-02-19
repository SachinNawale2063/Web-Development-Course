/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://w0.peakpx.com/wallpaper/351/597/HD-wallpaper-be-happy-emoji-smile-smiley-sparkle-sun.jpg" alt=""  style={{border: "4px solid red"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card
