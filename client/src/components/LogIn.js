import FormLog from './FormLog'
import Axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { ContactContext } from '../context/ContactContext'

const LogIn = (props) => {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const { setContacts } = useContext(ContactContext)

  useEffect(() => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/login'
    }).then(res => {
      props.setUser(res.data.username)
      setContacts(res.data.contacts)
    })
  }, [])

  const onLogin = async (e) => {
    e.preventDefault()
    await Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: 'http://localhost:8080/login'
    }).then(res => getDataUser(res))
  }

  const getDataUser = async (usuario) => {
    props.setUser(usuario.data.user)

    setContacts(usuario.data.contacts)
  }


  return (

    <FormLog buttonName='Log In'
      title='Log In'
      submitHandler={onLogin}
      onChangeUsername={(e) => setLoginUsername(e.target.value)}
      onChangePassword={(e) => setLoginPassword(e.target.value)}
      idUser='usernameLog'
      idPass='passwordLog'
      buttonTo="Register"
      anchor='Register'
      linkTo='/register'

    />


  )
}

export default LogIn