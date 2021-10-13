import styled from 'styled-components';

const Main = styled.main`
min-height: 100vh;
width: 100%;
display:flex;
justify-content:center;
align-items:center;
`
const FormContainer = styled.form`
width: 30%;
min-height: 60%;
`
const ButtonsContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:2rem
`

export { Main, FormContainer, ButtonsContainer }