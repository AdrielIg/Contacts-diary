import { useState } from 'react'
import { Route, Switch } from 'wouter'
import './App.css';
import Register from './components/Register'
import LogIn from './components/LogIn'
import Header from './components/Header'
import ContactsList from './components/ContactsList'


const mensajes = [{
  contact: 'Batman',
  datos: {
    numero: 999123,
    facebook: 'asdasd'
  }
},
{
  contact: 'Robin',
  datos: {
    numero: 33333,
    facebook: 'batmann'
  }
}]


function App() {

  const [user, setUser] = useState('')
  const [contactsList, setContactsList] = useState()
  const [contact, setContact] = useState({})


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
