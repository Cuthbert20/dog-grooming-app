require('dotenv').config()
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')

//middleware
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 7
    }
}))
app.use("/static", express.static("./media"))

//end points
app.post('/auth/login', ctrl.login)
app.post('/auth/register', ctrl.register)
app.delete('/auth/logout', ctrl.logout)
app.put('/auth/update', ctrl.update)
app.put('/auth/userinfo', ctrl.userInfo)
app.post('/auth/adddog', ctrl.addDog)
app.get('/dog/services', ctrl.services)
app.post('/dog/booking', ctrl.bookApp)
app.get('/dog/userdogs', ctrl.userDogs)
app.get('/dog/serviced', ctrl.serviceHistory)
app.get('/auth/admins', ctrl.adminDash)
app.get('/auth/booked/:id', ctrl.bookedUser)
app.post('/auth/contact', ctrl.userMsg)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is now listening`))

}).catch(err => console.log(err, "not connecting to db stu"))


