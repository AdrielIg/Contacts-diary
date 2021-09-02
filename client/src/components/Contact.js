import { useState } from 'react'
import styled from 'styled-components'


/* --------------Header Style--------------- */

const Contact = (props) => {
  const [active, setActive] = useState(false)

  const TitleStyled = styled.h4`
color: ${active ? "red" : "black"};

`
  const onSelectContact = (e) => {
    props.getUserInfo(e)
    setActive(false)
    setActive(true)
  }


  return (
    <div className='contact-wrapper Content' >
      <div >
        <TitleStyled >{props.name}</TitleStyled>
        <p>{props.number}</p>
      </div>
      <i className="fas fa-chevron-right" data-name={props.name} onClick={(e) => onSelectContact(e)} ></i>
      <div className='contact-modal'></div>
    </div>
  )
}

export default Contact