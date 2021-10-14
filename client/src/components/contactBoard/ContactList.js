import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddContact } from '../../actions/contacts'
import { ContactDetail } from './ContactDetail'
import { Contacts } from './Contacts'
import { ContactDetailWrapper } from './contactStyles/contactDetailStyles'
import { ContactListWrapper, Divider, Main } from './contactStyles/contactStyles'


export const ContactList = () => {

  const [contactInfo, setContactInfo] = useState({})
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()
  console.log('ContacT iNFO', contactInfo)

  const handlerContactDetails = async (id) => {
    const contactFound = await contacts.find(contact => contact._id === id)
    setContactInfo(contactFound)
  }
  const handleAddContact = () => {
    dispatch(startAddContact())
  }

  return (
    <Main>
      <ContactListWrapper>
        <div className='text-center'>
          <h3>
            Contact List
          </h3>
          <button className='btn btn-success ' onClick={handleAddContact}>
            Add Contact
          </button>
          <hr />
        </div>
        <Divider>
          {/* Contacts Items */}
          <Contacts handlerContactInfo={handlerContactDetails} />

          <ContactDetail contactInfo={contactInfo} handleSetContactInfo={setContactInfo} />

        </Divider>
      </ContactListWrapper>
    </Main>
  )
}
