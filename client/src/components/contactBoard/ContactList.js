import React from 'react'
import { Contacts } from './Contacts'
import { ContactListWrapper, Divider, Main } from './contactStyles/contactStyles'


export const ContactList = () => {
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
          <Contacts />
        </Divider>
      </ContactListWrapper>
    </Main>
  )
}
