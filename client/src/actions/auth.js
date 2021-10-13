import { types } from "../types/types";
import Axios from 'axios'

// Async login
export const startLoginUserPassword = (username, password) => {
  return (dispatch) => {
    Axios.post('http://localhost:8080/login', {
      username,
      password
    })
      .then(response => {
        console.log(response)
        const { username, contacts } = response.data
        dispatch(login(username))


      }).catch(err => {
        console.log(err)
      })

  }
}

// Change login reducer
export const login = (username) => {
  return {
    type: types.login,
    payload: {
      username
    }
  }
}

export const logout = () => {
  return {}
}