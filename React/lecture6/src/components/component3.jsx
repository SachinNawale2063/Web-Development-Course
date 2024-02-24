/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { counterContext } from '../context/Context'

const component3 = () => {

    const counter = useContext(counterContext)
  return (
    <div>
      this is component3

      count value from app.jsx is {counter}
    </div>
  )
}

export default component3
