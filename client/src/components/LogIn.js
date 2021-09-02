import FormLog from './FormLog'
import Axios from 'axios'
import { useState } from 'react'

const LogIn = (props) => {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

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
    }).then(res => props.getUser(res))
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