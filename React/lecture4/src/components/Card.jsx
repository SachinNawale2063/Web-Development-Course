/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="id">id : {props.id}</div>
            <div className="title">Title : {props.title}</div>
            <div className="data">Body : {props.body}</div>
        </div>

    )
}

export default Card 
