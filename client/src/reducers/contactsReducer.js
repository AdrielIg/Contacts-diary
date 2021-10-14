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
      saveToLocalStorage('contacts', action.payload)
      return [...action.payload]

    case types.addContact:
      return [...state, action.payload]

    case types.removeContact:
      const idDeleted = action.payload._id
      const contactsFiltered = state.filter(contact => contact._id !== idDeleted)
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