import React from 'react'
import { DataWrapper } from './contactStyles/contactDataStyles'

export const ContactDataDetail = ({ icon, data }) => {
  return (
    <div>
      <DataWrapper>
        <i className={icon}></i>
        <p>{data}</p>
      </DataWrapper>
      <hr />
    </div>
  )
}
