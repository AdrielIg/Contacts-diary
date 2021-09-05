import { useContext, useEffect, useState } from 'react'
import { Route, Switch } from 'wouter'
import { ContactContext, ContactProvider } from './context/ContactContext'
import './App.css';
import Register from './components/Register'
import LogIn from './components/LogIn'
import Header from './components/Header'
import ContactsList from './components/ContactsList'
import Axios from 'axios'




function App() {

  const [user, setUser] = useState('')
  const [contactsList, setContactsList] = useState()
  /*  const { contactss, setContactss } = useContext(ContactContext)
   console.log(contactss)
  */
  useEffect(() => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/login'
    }).then(res => {
      setUser(res.data.username)
      setContactsList(res.data.contacts)
    })
  }, [])


  const getDataUser = async (usuario) => {
    setUser(usuario.data.user)

    setContactsList(usuario.data.contacts)
  }

  const addContactToList = async () => {
    await Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/contacts'
    }).then(res => {
      setContactsList(res.data)
    }).catch(err => console.log(err))
  }


  const isUserLogged = user ? <ContactsList addToContactList={addContactToList} contacts={contactsList} /> : <LogIn getUser={getDataUser} />



  return (
    <ContactProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route component={Register} path='/register' />
          {/* <Route component={LogIn} path='/login' /> */}
        </Switch>

        {isUserLogged}



      </div>

    </ContactProvider>
  );
}

export default App;
