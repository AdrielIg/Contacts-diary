import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Axios from 'axios'


import { logout, startLogout } from '../../actions/auth'
import { setContacts, startAddContact } from '../../actions/contacts'
import { ContactHeader } from './ContactHeader'
import { ContactList } from './ContactList'
import { loadFromLocalStorage } from '../../helpers/localStorageHelper'

export const ContactScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContacts(loadFromLocalStorage('contacts')))
  }, [])





  return (
    <>
      <ContactHeader />
      <ContactList />

    </>
  )
}
