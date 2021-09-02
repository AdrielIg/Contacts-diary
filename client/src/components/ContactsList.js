import { useState } from 'react'
import Contact from './Contact'
import ContactDetail from './ContactDetail'


const ContactsList = (props) => {
  const [contactInfo, setContactInfo] = useState()

  const getContactInfoHandler = async (e) => {
    const name = e.target.dataset.name
    const contactData = await props.contacts.filter(contact => contact.name === name)
    /* The first an unique object of the array */
    setContactInfo(contactData[0])

  }
  console.log('SKERE', props.contacts)



  const contacts = props.contacts ? (props.contacts.map(contact => {
    return (
      <Contact key={contact._id} name={contact.name} number={contact.number} getUserInfo={getContactInfoHandler} />
    )
  })) : <p>No hay contactos</p>

  return (
    <div className='contacts-container'>
      <h2>Contact List</h2>
      <div className='contact-list-wrapper'>
        <div className='contact-card Container Flipped'>
          {contacts}


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