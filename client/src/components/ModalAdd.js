import styled from 'styled-components'
import InputAdd from './InputAdd'

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

  console.log('modal', ModalWrapper.styledComponentId)
  const closeModalOnly = (e) => {
    const modal = e.target.className.split(' ')
    if (modal[0] === ModalWrapper.styledComponentId) {
      props.closeModal()
      return
    }
    return

  }

  return (
    <ModalWrapper onClick={closeModalOnly} >
      <FormWrapper >
        <WrapperIcon><Icon className="fas fa-times" onClick={e => props.closeModal(e)}></Icon></WrapperIcon>

        <TitleAdd>Add Contact</TitleAdd>
        <Form>
          <InputAdd type='text' id='contact-name' label='Name' name='name' require={true} />
          <InputAdd type='number' id='contact-number' label='Phone' name='number' require={true} />
          <InputAdd type='text' id='contact-avatar' label='Image' name='avatar' />
          <InputAdd type='text' id='contact-linkedin' label='Linked In' name='linkedin' />
          <InputAdd type='text' id='contact-facebook' label='Facebooks' name='facebook' />
          <InputAdd type='text' id='contact-twitter' label='Twitter' name='twitter' />
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