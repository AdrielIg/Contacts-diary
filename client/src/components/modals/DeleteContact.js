
import styled from "styled-components"
import Axios from 'axios'
import { useContext } from "react"
import { ContactContext } from "../../context/ContactContext"

const DeleteForm = styled.div`
min-height:10vh;
min-width: 100%;
background-color: #fff;
  box-shadow: 2px 2px 4px #969691, -2px -2px 4px #ffffff;
z-index: 2000;
margin:2rem 0;
position: relative;
`
const DeleteTitle = styled.h5`
  font-size:1.4rem;
  padding-top: 1rem;
`
const DeleteName = styled.p`
  font-size: 1.2rem;
`
const ButtonsWrapper = styled.div`
  padding: 1rem 0;
`
const ButtonYes = styled.button`
  padding: .5rem 1rem;
  color: #fff;
  margin-left: 1rem;
  border:none;
  border-radius: 30px;
background: #29db5f;
box-shadow:  2px 2px 3px #146B2E,
             -2px -2px 3px #2ae262;
cursor: pointer;
`
const ButtonNo = styled.button`
 color: #fff;

  padding: .5rem 1rem;
  margin-right: 1rem;
  border: none;
  border-radius: 30px;  
background: #db2929;
box-shadow:  2px 2px 2px #6F2424,
             -2px -2px 2px #f72e2e;
margin-right: 4rem ;
cursor: pointer;
`

const DeleteContact = (props) => {

  const { setContacts } = useContext(ContactContext)
  console.log('Los props rey', props)
  const addContactToList = async () => {
    await Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/contacts'
    }).then(res => {
      setContacts(res.data)
    }).catch(err => console.log(err))
  }

  const onClickCancel = () => {
    props.closeModal(false)
  }

  const onDeleteContact = async () => {
    await Axios({
      method: 'DELETE',
      withCredentials: true,
      url: `http://localhost:8080/contact/${props.userId}`
    }).then(res => console.log(res))
      .catch(err => console.log(err))

    await addContactToList()

    props.closeModal(false)

  }

  return (
    <DeleteForm>
      <DeleteTitle>
        Are you sure you want to delete this contact?
      </DeleteTitle>
      <DeleteName>
        {props.name} is going to miss you :(
      </DeleteName>
      <ButtonsWrapper>
        <ButtonNo onClick={onClickCancel}>No</ButtonNo>
        <ButtonYes onClick={onDeleteContact}>Yes</ButtonYes>
      </ButtonsWrapper>
    </DeleteForm>

  )
}

export default DeleteContact