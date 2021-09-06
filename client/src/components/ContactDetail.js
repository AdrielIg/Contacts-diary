import DetailData from './DetailData'
import avatarLogo from '../avatar.png'
import DeleteContact from './modals/DeleteContact'
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { ContactContext } from '../context/ContactContext'


const ButtonsWrapper = styled.div`
  margin: 2rem 0;
`
const DeleteButton = styled.button`
   padding:.5rem 1rem;
  font-size: 1.6rem;
  font-weight:bold;
  color: #fff;
  border: none;
  border-radius: 30px;  
background: #db2929;
box-shadow:  2px 2px 2px #6F2424,
             -2px -2px 2px #f72e2e;
margin-right: 4rem ;
cursor: pointer;
`

const EditButton = styled.button`
padding:.5rem 1rem;
  font-size: 1.6rem;
  font-weight:bold;
  color: #fff;
  border: none;
  border-radius: 30px;
background: #29db5f;
box-shadow:  2px 2px 3px #28d45c,
             -2px -2px 3px #2ae262;
cursor: pointer;
`

const ContactDetail = (props) => {


  const { isDeleted, setIsDeleted } = useContext(ContactContext)





  const avatar = props.contact && props.contact.avatar ?
    props.contact.avatar : avatarLogo;

  const deleteContactForm = () => {
    setIsDeleted(true)
  }



  const contactDetail = props.contact ?
    <div className='detail-card'>
      <ButtonsWrapper>
        <DeleteButton user={props.contact} name={props.contact.name} onClick={deleteContactForm}>Delete Contact</DeleteButton>
        <EditButton>Edit Contact</EditButton>
      </ButtonsWrapper>
      {/* Delete form */}
      {isDeleted && <DeleteContact userId={props.contact._id} closeModal={setIsDeleted} name={props.contact.name} />}

      <img src={avatar} className='detail-avatar' alt={props.contact.name} />
      <h4>{props.contact.name}</h4>
      <DetailData data={props.contact.number} icon={'fas fa-phone-square-alt detail-icon'} />
      <DetailData data={props.contact.linkedin} icon={'fab fa-linkedin detail-icon'} />
      <DetailData data={props.contact.facebook} icon={'fab fa-facebook-square detail-icon'} />
      <DetailData data={props.contact.twitter} icon={'fab fa-twitter-square detail-icon'} />
    </div>
    :
    <h4 className='detail-no-view'>Select a contact to view details "<i className="fas fa-chevron-right"></i>"</h4>
  return (
    <>

      <div className='detail-wrapper'>

        {contactDetail}
      </div>
    </>

  )
}


export default ContactDetail