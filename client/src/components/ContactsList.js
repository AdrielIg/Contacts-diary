import Contact from './Contact'







const contactsList = (props) => {
  const pepes = props.contacts
  const contacts = props.contacts ? (props.contacts.map(contact => {
    return (
      <Contact name={contact.name} number={contact.number} />
    )
  })) : <p>No hay contactos</p>


  console.log('PROPES', props.contacts)

  return (
    <div className='contacts-container'>
      <h2>Contact List</h2>
      <div className='contact-list-wrapper'>
        <div className='contact-card'>
          {contacts}
        </div>
        <div className='contact-details'>

        </div>
      </div>



    </div>

  )
}

export default contactsList