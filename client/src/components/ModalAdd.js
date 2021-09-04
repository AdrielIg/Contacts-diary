import styled from 'styled-components'
import InputAdd from './InputAdd'
import { useState } from 'react'
import Axios from 'axios'

/* --------------Modal Style--------------- */
const ModalWrapper = styled.div`
background-color: rgba(0,0,0,0.7);
position:absolute;
top: 0;
left: 0;
min-height: 110vh;
width: 100vw;
z-index: 1000;
display:flex;
align-items:center;
justify-content:center;
`
const FormWrapper = styled.div`
min-height:30vh;
min-width: 50vw;
border-radius:30px;
background-color: #fff;
  box-shadow: 2px 2px 4px #969691, -2px -2px 4px #ffffff;
z-index: 2000;

`
const TitleAdd = styled.h4`
font-size: 3rem;
font-weight: bold;
z-index:1500;
margin:1rem;
`
const WrapperIcon = styled.div`
text-align: right;
`
const Icon = styled.i`
margin-right:6rem;
margin-top:2rem;
font-size: 2rem;
cursor: pointer;
`
const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const CancelButton = styled.button`
  padding:.5rem 1rem;
  font-size: 1.6rem;
  font-weight:bold;
  color: #fff;
  border: none;
  border-radius: 30px;  
background: #db2929;
box-shadow:  2px 2px 2px #bf2424,
             -2px -2px 2px #f72e2e;
margin-right: 4rem ;
cursor: pointer;
`
const SendButton = styled.input`
padding:.5rem 1rem;
  font-size: 1.6rem;
  font-weight:bold;
  color: #fff;
  border: none;
  border-radius: 30px;
background: #29db5f;
box-shadow:  2px 2px 3px #28d45c,
             -2px -2px 3px #2ae262;
cursor: pointer;
`
const ButtonWrapper = styled.div`
  margin:3rem 0;
`



const ModalAdd = (props) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [avatar, setAvatar] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [facebook, setFacebook] = useState('')
  const [twitter, setTwitter] = useState('')


  const closeModalOnly = (e) => {
    const modal = e.target.className.split(' ')

    if (modal[0] === ModalWrapper.styledComponentId) {
      props.closeModal()
      return
    }
    return

  }
  const addContact = async (e) => {
    e.preventDefault()
    props.closeModal()
    await Axios({
      method: 'POST',
      data: {
        name: name,
        number: number,
        avatar: avatar,
        linkedin: linkedin,
        facebook: facebook,
        twitter: twitter
      },
      withCredentials: true,
      url: 'http://localhost:8080/save/contact'
    }).catch(err => console.log(err))

    props.addContactToList()
  }

  return (
    <ModalWrapper onClick={closeModalOnly} >
      <FormWrapper >
        <WrapperIcon><Icon className="fas fa-times" onClick={e => props.closeModal(e)}></Icon></WrapperIcon>

        <TitleAdd>Add Contact</TitleAdd>
        <Form onSubmit={e => addContact(e)}>
          <InputAdd onChangeHandler={e => setName(e.target.value)} type='text' id='contact-name' label='Name' name='name' require={true} />
          <InputAdd onChangeHandler={e => setNumber(e.target.value)} type='number' id='contact-number' label='Phone' name='number' require={true} />
          <InputAdd onChangeHandler={e => setAvatar(e.target.value)} type='text' id='contact-avatar' label='Avatar' name='avatar' />
          <InputAdd onChangeHandler={e => setLinkedin(e.target.value)} type='text' id='contact-linkedin' label='Linked In' name='linkedin' />
          <InputAdd onChangeHandler={e => setFacebook(e.target.value)} type='text' id='contact-facebook' label='Facebook' name='facebook' />
          <InputAdd onChangeHandler={e => setTwitter(e.target.value)} type='text' id='contact-twitter' label='Twitter' name='twitter' />
          <ButtonWrapper>
            <CancelButton onClick={props.closeModal}>Cancel</CancelButton>
            <SendButton type='submit' value='Add Contact' />
          </ButtonWrapper>


        </Form>

      </FormWrapper>
    </ModalWrapper>
  )
}

export default ModalAdd