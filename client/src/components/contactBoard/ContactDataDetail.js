import React from 'react'
import { Data, DataWrapper, Icon, DataContainer } from './contactStyles/contactDataStyles'

export const ContactDataDetail = ({ icon, data }) => {
  return (
    <DataContainer className='mt-2'>
      <DataWrapper>
        <Icon className={icon}></Icon>
        <Data>{data}</Data>
      </DataWrapper>

    </DataContainer>
  )
}
