import { useContext, useState } from 'react'
import { ContactContext } from '../context/ContactContext'
import Contact from './Contact'
import ContactDetail from './ContactDetail'
import ModalAdd from './ModalAdd'


const ContactsList = (props) => {
  const [contactInfo, setContactInfo] = useState()
  const [addContactModal, setAddContactModal] = useState(false)
  const { contacts } = useContext(ContactContext)
  console.log('El context es', contacts)
  const getContactInfoHandler = async (e) => {
    const name = e.target.dataset.name
    const contactData = await contacts.filter(contact => contact.name === name)
    /* The first an unique object of the array */
    setContactInfo(contactData[0])

  }


  const contactList = contacts ? (contacts.map(contact => {
    return (
      <Contact key={contact._id} name={contact.name} number={contact.number} getUserInfo={getContactInfoHandler} />
    )
  })) : <p>No hay contactos</p>

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
      {addContactModal && <ModalAdd closeModal={closeModalHandler} />}
      <h2>Contact List</h2>
      <div className='contacts-container-wrapper'>
        <a href='#title' onClick={openModalHandler}><i className="fas fa-plus"></i>Add Contact</a>
      </div>
      <div className='contact-list-wrapper'>
        <div className='contact-card Container Flipped'>
          {contactList}


          <div className='relleno'></div>

        </div>
        <div className='contact-details'>
          <ContactDetail contact={contactInfo} />
        </div>
      </div>




    </div>

  )
}

export default ContactsList