import React from 'react'
import { useSelector } from 'react-redux'
import { ContactItem } from './ContactItem'
import { ContactsContainer, ContactWrapper } from './contactStyles/contactStyles'

export const Contacts = () => {

  const contacts = useSelector(state => state.contacts)

  const contactsRender = contacts.map(contact => {
    return (

      <ContactItem name={contact.name} avatar={contact.avatar} _id={contact._id} />
    )
  })


  return (
    <ContactsContainer>
      {contactsRender}

    </ContactsContainer>
  )
}
