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
      }).catch(err => {
        console.log(err)
      })
  }
}




export const addContact = (contact) => {
  return {
    type: types.addContact,
    payload: contact
  }

}

export const setContacts = (contactsArray) => {
  return {
    type: types.setContacts,
    payload: contactsArray
  }
}