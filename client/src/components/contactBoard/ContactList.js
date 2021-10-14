import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ContactDetail } from './ContactDetail'
import { Contacts } from './Contacts'
import { ContactDetailWrapper } from './contactStyles/contactDetailStyles'
import { ContactListWrapper, Divider, Main } from './contactStyles/contactStyles'


export const ContactList = () => {

  const [contactInfo, setContactInfo] = useState({})
  const contacts = useSelector(state => state.contacts)

  const handlerContactDetails = async (id) => {
    const contactFound = await contacts.find(contact => contact._id === id)
    setContactInfo(contactFound)
  }

  return (
    <Main>
      <ContactListWrapper>
        <div className='text-center'>
          <h3>
            Contact List
          </h3>
          <button className='btn btn-success '>
            Add Contact
          </button>
          <hr />
        </div>
        <Divider>
          {/* Contacts Items */}
          <Contacts handlerContactInfo={handlerContactDetails} />
          <ContactDetail contactInfo={contactInfo} />
        </Divider>
      </ContactListWrapper>
    </Main>
  )
}
