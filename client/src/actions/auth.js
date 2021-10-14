import { types } from "../types/types";
import Axios from 'axios'

// Async login
export const startLoginUserPassword = (username, password) => {
  return async (dispatch) => {
    await Axios({
      method: 'POST',
      data: {
        username,
        password
      },
      withCredentials: true,
      url: 'http://localhost:8080/login'
    })
      .then(response => {
        console.log('startLoginUserPassword ', response)
        const { username, contacts, message } = response.data
        dispatch(login(username))


      }).catch(err => {
        console.log(err)
      })

  }
}

export const startRegisterUserPassword = (username, password) => {
  return (dispatch) => {
    Axios({
      method: 'POST',
      data: {
        username,
        password
      },
      withCredentials: true,
      url: 'http://localhost:8080/register'
    })
      .then(response => {
        console.log(response)
        const { username, message } = response.data
        dispatch(login(username))


      }).catch(err => {
        console.log(err)
      })
  }
}

export const startLogout = () => {
  return (dispatch) => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/logout'
    })
      .then(res => {
        console.log(res)
        dispatch(logout())
      })
  }
}

export const isUserConnected = (callback) => {
  return (dispatch) => {

    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/user'
    })
      .then(response => {
        console.log('iSUSERRLOGGED', response)
        if (response.data.username) {
          dispatch(login(response.data.username))
          callback(true)
        }
        else {
          callback(false)
        }

      }).catch(err => {
        console.log(err)
      })

  }
}


// Change login reducer
export const login = (username) => {
  localStorage.setItem('user', username)
  return {
    type: types.login,
    payload: {
      username
    }
  }
}

export const logout = () => {
  localStorage.removeItem('user')
  return {
    type: types.logout
  }
}