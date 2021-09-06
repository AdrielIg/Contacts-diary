import { useContext } from "react"
import { ContactContext } from "../context/ContactContext"

const Contact = (props) => {

  const { setIsDeleted } = useContext(ContactContext)

  const onSelectContact = (e) => {
    props.getUserInfo(e)
    const arrow = e.target
    const contactCard = e.target.parentElement
    const abuelo = Array.from(contactCard.parentElement.children)
    abuelo.forEach(element => {
      element.style.boxShadow = 'none'
      if (element.className !== 'relleno') {
        element.children[1].style.boxShadow = '6px 6px 12px #969696, -6px -6px 12px #ffffff'
      }
    });

    arrow.style.boxShadow = 'inset 3px 3px 4px #7b7b7b, inset -3px -3px 4px #ffffff'
    contactCard.style.backgroundColor = '#fff'
    contactCard.style.boxShadow = 'inset 10px 10px 30px #7b7b7b, inset -10px -10px 30px #ffffff'

    setIsDeleted(false)

  }


  return (
    <div className='contact-wrapper Content' >
      <div >
        <h4>{props.name}</h4>
        <p>{props.number}</p>
      </div>
      <i className="fas fa-chevron-right" data-name={props.name} onClick={(e) => onSelectContact(e)} ></i>




    </div>
  )
}

export default Contact