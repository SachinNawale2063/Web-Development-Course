/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective}) => {
  return (
    <div>
      this is {adjective} navbar
    </div>
  )
}

export default memo(Navbar)
