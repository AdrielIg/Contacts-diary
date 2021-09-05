import { createContext, useState } from "react";

export const ContactContext = createContext()



export const ContactProvider = ({ children }) => {

  const [contactss, setContactss] = useState('skere')
  return (
    <ContactContext.Provider value={{
      contactss,
      setContactss
    }}>
      {children}
    </ContactContext.Provider>
  )
}