import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Axios from 'axios'


import { logout, startLogout } from '../../actions/auth'

export const ContactScreen = () => {

  const dispatch = useDispatch()




  const handleLogout = (e) => {
    dispatch(startLogout())
    console.log('hola')
  }

  return (
    <div>
      <h1>Rey</h1>
      <button onClick={handleLogout}>logOut</button>
    </div>
  )
}
