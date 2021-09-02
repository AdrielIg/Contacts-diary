import styled from 'styled-components'
import Axios from 'axios'

/* --------------Header Style--------------- */
const HeaderStyled = styled.header`
background: linear-gradient(145deg, #ffffff, #e6e6e6);
box-shadow:  9px 9px 18px #9e9e9e,
             -9px -9px 18px #ffffff;
display:flex;
justify-content: space-around;
align-items: center;
min-height: 10vh;
`
const Header = () => {

  const logout = async () => {
    await Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/logout'
    }).then(res => console.log(res))
  }

  return (
    <HeaderStyled>
      <h1 id='title'>Contacts</h1>

      <nav>
        <ul className='nav-links'>
          <li className='nav-link'><a href='/'><i className="fab fa-github"></i>GitHub</a></li>
          <li className='nav-link'><a href='/login' onClick={logout}><i className="fas fa-sign-out-alt"></i>Logout</a></li>
        </ul>
      </nav>
    </HeaderStyled>
  )

}

export default Header