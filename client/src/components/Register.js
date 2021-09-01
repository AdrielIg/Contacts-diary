import FormLog from './FormLog'
import Axios from 'axios'
import { useState } from 'react'
import { Link } from 'wouter'

const Register = () => {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const onRegister = (e) => {
    e.preventDefault()
    Axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: 'http://localhost:8080/register'
    }).then(res => console.log(res))
  }


  return (

    <FormLog buttonName='Sign Up'
      title='Register Form'
      submitHandler={onRegister}
      onChangeUsername={(e) => setRegisterUsername(e.target.value)}
      onChangePassword={e => setRegisterPassword(e.target.value)}
      idUser='usernameRegister'
      idPass='passwordRegister'
      anchor='Log In'
      linkTo='/login' />


  )
}

export default Register