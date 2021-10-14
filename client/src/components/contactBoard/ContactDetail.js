import React from 'react'
import { ContactDetailAvatar, ContactDetailWrapper } from './contactStyles/contactDetailStyles'

export const ContactDetail = ({ contactInfo }) => {

  return (
    <ContactDetailWrapper>
      <h3>{contactInfo.name}</h3>
      <ContactDetailAvatar src={contactInfo.avatar} />


    </ContactDetailWrapper>
  )
}
