import { loadFromLocalStorage, saveToLocalStorage } from "../helpers/localStorageHelper";
import { types } from "../types/types";

/* 
[
  {
    name,
    number,
    avatar: url,
    linkedin,
    facebook,
    twitter,
    id: _id
  }
]
*/


export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case types.setContacts:
      return [...action.payload]

    case types.addContact:
      return [...state, action.payload]

    case types.removeContact:
      // recieve the Id
      const idDeleted = action.payload
      const contactsFiltered = state.filter(contact => contact._id !== idDeleted)
      console.log('CONTACTOS FILTRADOS', action.payload)
      return [...contactsFiltered]

    case types.editContact:
      const contactEdited = action.payload
      const contactFound = state.find(contact => contact._id = contactEdited._id)
      contactFound = contactEdited
      return [...state]

    default:
      return state
  }
}