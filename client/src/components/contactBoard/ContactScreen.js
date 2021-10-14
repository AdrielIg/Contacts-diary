import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Axios from 'axios'


import { logout, startLogout } from '../../actions/auth'
import { startAddContact } from '../../actions/contacts'
import { ContactHeader } from './ContactHeader'
import { ContactList } from './ContactList'

export const ContactScreen = () => {

  const dispatch = useDispatch()

  const handleAddContact = () => {
    dispatch(startAddContact())
  }




  return (
    <>
      <ContactHeader />
      <ContactList />

    </>
  )
}
