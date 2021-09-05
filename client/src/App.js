import { useState } from 'react'
import { Route, Switch } from 'wouter'
import { ContactProvider } from './context/ContactContext'
import './App.css';
import Register from './components/Register'
import LogIn from './components/LogIn'
import Header from './components/Header'
import ContactsList from './components/ContactsList'





function App() {

  const [user, setUser] = useState('')

  const isUserLogged = user ? <ContactsList /> : <LogIn setUser={setUser} />

  return (

    <div className="App">
      <Header />
      <Switch>
        <Route component={Register} path='/register' />
      </Switch>
      <ContactProvider>
        {isUserLogged}
      </ContactProvider>
    </div>


  );
}

export default App;
