import Contact from './Contact'
import ContactDetail from './ContactDetail'


const contactsList = (props) => {



  const contacts = props.contacts ? (props.contacts.map(contact => {
    return (
      <Contact name={contact.name} number={contact.number} />
    )
  })) : <p>No hay contactos</p>

  const detail = props.contacts ? props.contacts[0] : null
  console.log('PROPS', props.contacts)





  return (
    <div className='contacts-container'>
      <h2>Contact List</h2>
      <div className='contact-list-wrapper'>
        <div className='contact-card'>
          {contacts}
        </div>
        <div className='contact-details'>
          <ContactDetail contact={detail} />
        </div>
      </div>



    </div>

  )
}

export default contactsList