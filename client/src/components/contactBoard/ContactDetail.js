import React from 'react'
import { useDispatch } from 'react-redux';

import { startDeleteContact } from '../../actions/contacts';

import { ContactDataDetail } from './ContactDataDetail'
import { ContactDetailAvatar, ContactDetailWrapper, TitleContainer } from './contactStyles/contactDetailStyles'

export const ContactDetail = ({ contactInfo, handleSetContactInfo }) => {

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(startDeleteContact(id))
    handleSetContactInfo({})
  }

  return (
    <ContactDetailWrapper>
      {
        contactInfo.name ?
          <>
            <TitleContainer>
              <h3>{contactInfo.name}</h3>
              <button className='btn btn-danger' onClick={() => handleDelete(contactInfo._id)}><i class="fas fa-trash-alt"></i></button>
            </TitleContainer>
            <ContactDetailAvatar src={contactInfo.avatar} alt={`${contactInfo.name} profile`} />
            <ContactDataDetail data={contactInfo.number} icon="fas fa-phone-square-alt" />
            <ContactDataDetail icon="fab fa-twitter-square" data={contactInfo.twitter} />
            <ContactDataDetail icon="fab fa-linkedin" data={contactInfo.linkedin} />
            <ContactDataDetail icon="fab fa-facebook-square" data={contactInfo.facebook} />
          </>
          :
          <h2>Nothing to see...</h2>
      }





    </ContactDetailWrapper>
  )
}
