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
      return [...action.payload.contact]

    case types.addContact:
      return [...state, action.payload.contact]

    case types.removeContact:
      const idDeleted = action.payload.contact.id
      const contactsFiltered = state.filter(contact => contact.id !== idDeleted)
      return [...contactsFiltered]

    case types.editContact:
      const contactEdited = action.payload.contact
      const contactFound = state.find(contact => contact.id = contactEdited.id)
      contactFound = contactEdited
      return [...state]

    default:
      return state
  }
}