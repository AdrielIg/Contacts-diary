const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const session = require('express-session')
const User = require('./model/user')


const app = express()

mongoose.connect("mongodb+srv://adriel:;Mermelada;1997@cluster0.afgyq.mongodb.net/contacts?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => console.log('Mongoose Connected!'))

/* Config */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}))
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require('./lib/passportConfig')(passport)
/* End of Config */


/* Routes */
app.get('/login', (req, res) => {

  try {
    if (req.isAuthenticated()) {

      const { username, contacts } = req.user
      console.log(username)
      res.send({ username, contacts })
    }
    else {
      res.send('User not authorized')
    }
  }
  catch (err) {
    console.log(err)
  }

})
app.post('/login', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) res.send({ err: 1, message: 'User not found' })
    else {
      req.logIn(user, err => {
        if (err) throw err
        res.send({ message: 'User Log In successfully!', username: req.user.username, contacts: req.user.contacts })
      })
    }
  })(req, res, next)

  console.log('Login', req.body)
})



app.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err
    if (doc) res.send({ message: 'User already exist' })
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword
      })
      await newUser.save()
      res.send({ message: 'User created', username: req.body.username })
    }
  })
  console.log('User Registered!!!', req.body)
})


app.get('/user', (req, res) => {
  console.log('/user', req.user)
  if (req.isAuthenticated()) {
    console.log(req.user)
    res.send({ message: 'Is Logged In', username: req.user.username })
  }
  else {
    res.send({ message: 'No user connected' })
  }
})

app.get('/contact/:name', async (req, res) => {
  console.log('El usario pah', req.user.username)
  console.log('param', req.params.name)

  /* Find a specific contact in a document*/
  const contact = await User.findOne({ $and: [{ username: req.user.username }, { contacts: { $elemMatch: { name: req.params.name } } }] }, { 'contacts.$': 1 })
  res.send(contact)
})

app.get('/contacts', async (req, res) => {
  const contacts = req.user.contacts
  res.send(contacts)

})

app.get('/contacts/:position', async (req, res) => {
  try {
    /* Get the last */
    console.log(req.params.position)
    const find = await User.findOne(
      {
        username: req.user.username
      },
      {
        contacts: { $slice: ["$contacts", -1] }
      }

    );

    res.send(find)
  }
  catch (err) {
    console.log(err)
  }



})

app.post('/save', async (req, res) => {
  try {
    const contact = req.body

    await User.findOneAndUpdate({ username: req.user.username }, { $push: { contacts: contact } })
    const { contacts } = await User.findOne(
      {
        username: req.user.username
      },
      {
        contacts: { $slice: ["$contacts", -1] }
      }

    );

    res.send({ message: 'Contact Adde Succesfully', contact: contacts[0] })
  } catch (err) {
    console.log(err)
  }

})

app.delete('/contact/:id', async (req, res) => {
  console.log('EL BODY ES:', req.params.id)
  console.log('EL USER ESSS:', req.user.username)
  const idUser = req.params.id
  const deleted = await User.findOneAndUpdate(
    { username: req.user.username },
    { $pull: { contacts: { _id: idUser } } }
  )


  console.log(deleted)
  res.send('eliminado')
})

app.get('/logout', (req, res) => {
  console.log('el usuario desconectado es:', req.user)
  req.logOut()
  res.send('Desconectado correctamente')
})


app.listen(8080, () => {
  console.log('Server Iniciado')
})