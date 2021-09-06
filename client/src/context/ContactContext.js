import { createContext, useState } from "react";

export const ContactContext = createContext()

export const ContactProvider = ({ children }) => {

  const [contacts, setContacts] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  return (
    <ContactContext.Provider value={{
      contacts,
      setContacts,
      isDeleted,
      setIsDeleted
    }}>
      {children}
    </ContactContext.Provider>
  )
}