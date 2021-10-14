import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startLogout } from '../../actions/auth'

export const ContactHeader = () => {
  const dispatch = useDispatch()
  const { username } = useSelector(state => state.auth)

  const handleLogout = (e) => {
    dispatch(startLogout())
    console.log('hola')
  }

  return (
    <nav className="navbar  navbar-dark bg-dark">
      <div className="container-fluid mx-3">
        <h1 className="navbar-brand" href="#">Contacts Diary</h1>
        <h3 className="navbar-brand" href="#">{username}</h3>
        <button className="btn btn-danger" type='button' onClick={handleLogout} >
          Log Out
        </button>

      </div>
    </nav>
  )
}
