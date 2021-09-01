import avatar from '../avatar.svg'
const Contact = (props) => {


  return (
    <div className='contact-wrapper' >
      <div>
        <h4>{props.name}</h4>
        <p>{props.number}</p>
      </div>
      <img src={avatar} />
      <div className='contact-modal'></div>
    </div>
  )
}

export default Contact