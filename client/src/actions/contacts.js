import { types } from "../types/types";
import Axios from "axios";

export const startAddContact = (contact) => {
  return (dispatch) => {
    Axios({
      method: 'POST',
      data: {
        name: 'test',
        number: '6969',
        avatar: 'skereee',
        linkedin: 'linked',
        facebook: 'face',
        twitter: 'twitty'
      },
      withCredentials: true,
      url: 'http://localhost:8080/save'
    })
      .then(res => {
        console.log(res)
        dispatch(addContact(res.data.contact))
      }).catch(err => {
        console.log(err)
      })
  }
}

export const startGetContacts = () => {
  return (dispatch) => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/contacts'
    })
      .then(res => {
        console.log('CONTACTOS PEDDISO', res.data)
        dispatch(setContacts(res.data))
      }).catch(err => {
        console.log(err)
      })
  }
}

export const startDeleteContact = (id) => {
  return (disptach) => {
    Axios({
      method: 'DELETE',
      withCredentials: true,
      url: `http://localhost:8080/contact/${id}`

    }).then(res => {
      console.log(res)
      disptach(deleteContact(id))
    })
  }
}





export const addContact = (contact) => {
  return {
    type: types.addContact,
    payload: contact
  }

}

export const deleteContact = (id) => {
  return {
    type: types.removeContact,
    payload: id
  }
}

export const setContacts = (contactsArray) => {
  return {
    type: types.setContacts,
    payload: contactsArray
  }
}