
import DetailData from './DetailData'

const ContactDetail = (props) => {

  const contactDetail = props.contact ?
    <div className='detail-card'>
      <img src={props.contact.avatar} className='detail-avatar' alt={props.contact.name} />
      <h4>{props.contact.name}</h4>
      <DetailData data={props.contact.number} icon={'fas fa-phone-square-alt detail-icon'} />
      <DetailData data={props.contact.numbe} icon={'fab fa-linkedin detail-icon'} />
      <DetailData data={props.contact.numbe} icon={'fab fa-facebook-square detail-icon'} />
      <DetailData data={props.contact.numbe} icon={'fab fa-twitter-square detail-icon'} />
    </div>
    :
    <h4 className='detail-no-view'>Select a contact to view details "<i className="fas fa-chevron-right"></i>"</h4>
  return (
    <div className='detail-wrapper'>
      {contactDetail}
    </div>

  )
}


export default ContactDetail