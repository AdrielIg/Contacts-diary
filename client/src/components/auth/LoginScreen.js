import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startLoginUserPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'
import { FormContainer, Main, ButtonsContainer } from './stylesAuth/stylesAuth'

export const LoginScreen = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)


  const [formValues, handleInputChange] = useForm({ username: 'test', password: 'test' })

  const { username, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginUserPassword(username, password))


  }

  return (
    <Main>
      <FormContainer className='text-center' onSubmit={handleLogin}>
        <h2 className='mb-5'>Login</h2>
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
          <button className='btn btn-primary'>Go to Register</button>
          <button type='submit' className='btn btn-primary'>Login</button>
        </ButtonsContainer>


      </FormContainer>
    </Main>
  )
}
