import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startRegisterUserPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'
import { FormContainer, Main, ButtonsContainer } from './stylesAuth/stylesAuth'

export const RegisterScreen = () => {

  const dispatch = useDispatch()



  const [formValues, handleInputChange] = useForm({ username: '', password: '' })

  const { username, password } = formValues

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(startRegisterUserPassword(username, password))

  }

  return (
    <Main>
      <FormContainer className='text-center' onSubmit={handleRegister}>
        <h2 className='mb-5'>Register</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label mb-2">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Your user..."
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label mb-2">Password:</label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Your password..."
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <ButtonsContainer className='mt-5'>
          <button className='btn btn-primary'>Go to Login</button>
          <button type='submit' className='btn btn-primary'>Register</button>
        </ButtonsContainer>


      </FormContainer>
    </Main>
  )
}
