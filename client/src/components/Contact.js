import { useState } from 'react'
import styled from 'styled-components'


/* --------------Header Style--------------- */


const TitleStyled = styled.h4`
color: ${props => props.variant};
`
const colore = 'red'
/* border - radius: 50px;
background: #e0e0e0;
box - shadow: inset 20px 20px 60px #bebebe,
  inset - 20px - 20px 60px #ffffff; */

const Contact = (props) => {

  const onSelectContact = (e) => {
    props.getUserInfo(e)
    const padre = e.target.parentElement
    const abuelo = Array.from(padre.parentElement.children)
    abuelo.forEach(element => {
      element.style.boxShadow = 'none'
    });

    padre.style.backgroundColor = '#fff'
    padre.style.boxShadow = 'inset 10px 10px 30px #7b7b7b, inset -10px -10px 30px #ffffff'

    console.log('padre', padre.className)

    console.log('abuelo', abuelo)


  }


  return (
    <div className='contact-wrapper Content' >
      <div >
        <TitleStyled>{props.name}</TitleStyled>
        <p>{props.number}</p>
      </div>
      <i className="fas fa-chevron-right" data-name={props.name} onClick={(e) => onSelectContact(e)} ></i>

    </div>
  )
}

export default Contact