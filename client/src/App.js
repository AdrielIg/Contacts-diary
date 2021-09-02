import { useEffect, useState } from 'react'
import { Route, Switch } from 'wouter'
import './App.css';
import Register from './components/Register'
import LogIn from './components/LogIn'
import Header from './components/Header'
import ContactsList from './components/ContactsList'
import Axios from 'axios'




function App() {

  const [user, setUser] = useState('')
  const [contactsList, setContactsList] = useState()

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


  const isUserLogged = user ? <ContactsList contacts={contactsList} /> : <LogIn getUser={getDataUser} />



  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={Register} path='/register' />
        {/* <Route component={LogIn} path='/login' /> */}
      </Switch>
      {isUserLogged}



    </div>
  );
}

export default App;
