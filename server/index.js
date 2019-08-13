require('dotenv').config()
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')

//middleware
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 8
    }
}))
//end points



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is now listening`))

}).catch(err => console.log(err, "not connecting to db stu"))


