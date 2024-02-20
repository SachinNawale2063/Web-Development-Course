/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'

const Navbar = (color) => {

    // useEffect(()=>{
    //     alert("value of the color was changed")
    // }, [color])
    //Example of cleanup function
    useEffect(() => {
        alert("Hey I am running because count was changed")

        return () => {
            alert("Component was unmounted")
        }

    }, [])

    return (
        <div>
            i am a navbar of color {color}
        </div>
    )
}

export default Navbar
