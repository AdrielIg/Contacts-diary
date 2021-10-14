import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, AvatarWrapper } from './contactStyles/contactItemStyles'
import { ContactWrapper } from './contactStyles/contactItemStyles'

export const ContactItem = ({ avatar, name, _id, handlerContactInfo }) => {



  return (
    <>
      <ContactWrapper key={_id} className='px-3'>
        <AvatarWrapper className='text-center'>
          <Avatar src={avatar} alt={`${name} profile`} />
          <h4 className='mx-3'>{name}</h4>
        </AvatarWrapper>
        <button className='btn btn-info' onClick={() => handlerContactInfo(_id)} >See more</button>

      </ContactWrapper>
      <hr />
    </>
  )
}
