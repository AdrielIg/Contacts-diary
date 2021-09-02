import styled from 'styled-components'

const Input = styled.input`
margin: 1rem 0;
 border: none;
 padding: 1rem;
 border-radius: 37px;
 background: #ffffff;
 box-shadow: inset 8px 8px 16px #c9c9c9, inset -8px -8px 16px #ffffff;

 
`
const Label = styled.label`
font-size: 1.4rem;
margin-right: 1.2rem;


`
const Section = styled.div`
 margin: 1rem;

 width: 100%;
`

const InputAdd = (props) => {

  return (
    <Section>
      <Label htmlFor={props.id} >{props.label + ':'}</Label>
      <Input type={props.type} placeholder={props.label + '...'} name={props.name} required={props.require} id={props.id} />
    </Section>
  )
}
export default InputAdd