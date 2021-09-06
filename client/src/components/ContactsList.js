import { useContext, useEffect, useState } from 'react'
/* Contect */
import { ContactContext } from '../context/ContactContext'
/* Components */
import Contact from './Contact'
import ContactDetail from './ContactDetail'
import ModalAdd from './ModalAdd'


const ContactsList = () => {
  /* Info of the contact selected */
  const [contactInfo, setContactInfo] = useState()
  /* Boolean to close and open form to add contact */
  const [addContactModal, setAddContactModal] = useState(false)
  const { contacts } = useContext(ContactContext)

  /* Quit details of the deleted contacts in "ContactDetails.js" */
  useEffect(() => {
    setContactInfo('')
  }, [contacts])

  const getContactInfoHandler = async (e) => {
    /* Get the contact selected */
    const name = e.target.dataset.name
    const contactData = await contacts.filter(contact => contact.name === name)
    /* The first an unique object of the array */
    setContactInfo(contactData[0])

  }


  const contactList = contacts.length > 0 ? (contacts.map(contact => {
    /* Render each contact */
    return (
      <Contact key={contact._id} name={contact.name} number={contact.number} getUserInfo={getContactInfoHandler} />
    )
  })) : <h2>Add some contacts...</h2>

  const openModalHandler = () => {
    setAddContactModal(true)
    document.body.style.overflowY = 'hidden'


  }
  const closeModalHandler = () => {
    setAddContactModal(false)
    document.body.style.overflowY = 'visible'

  }


  return (
    <div className='contacts-container'>
      {/* If form to add contact is open */}

      {addContactModal && <ModalAdd closeModal={closeModalHandler} />}

      <h2>Contact List</h2>
      <div className='contacts-container-wrapper'>
        <a href='#title' onClick={openModalHandler}><i className="fas fa-plus"></i>Add Contact</a>
      </div>
      <div className='contact-list-wrapper'>
        <div className='contact-card Container Flipped'>
          {/* Contact list with name + number */}

          {contactList}

          <div className='relleno'></div>
        </div>
        <div className='contact-details'>
          {/* Detail of contact */}
          <ContactDetail contact={contactInfo} />
        </div>
      </div>
    </div>

  )
}

export default ContactsList