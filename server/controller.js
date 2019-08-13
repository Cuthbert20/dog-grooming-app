const bcrypt = require('bcryptjs')

module.exports = {
   login: async (req,res) => {
       const db = req.app.get('db')
       const { login_name, password } = req.body
       const foundUser = await db.user_login([login_name])
       //here we are putting user on session. We can now access the whole user object on front end.
        const user = foundUser[0]
        //if user doesn't exist we will send a status 401 error code
        if(!user){
            return res.status(401).send('User not found, please register')
        }
        //creating a const using bcrypt.compareSync takes in 2 params password, user.hash
        console.log(user)
        const isAuthenticated = bcrypt.compareSync(password, user.password)//refers to hashed password from registration that lives on the user obj on database.
        if(!isAuthenticated){
            res.status(403).send('Wrong PassWord')
        }
        req.session.user = {
            //the value on the left is what we will reference when we access the data on the front end.
            //the name on the left side is what the front end will see when refering to the key value pair ie obj
            user_id: user.user_id,
                email: user.email,
                login_name: user.login_name,  
                admin_user: user.admin_user
        }
        console.log(req.session)
       res.status(200).send(req.session.user)
   } ,
   register: async (req,res) => {
       const db = req.app.get('db')
       const { email, password, login_name, admin_user } = req.body
       //Set the value of this SQL query to a variable called result.
       const result = await db.user_login([login_name])
       //Remember that SQL queries come back in an array
       const existingUser = result[0]
       if(existingUser){
           res.status(409).send(console.log('login name already in use'))
       }
       else{
           const salt = bcrypt.genSaltSync(10)
           //now we are going to make the hash bread with password and salt as our ingred
           const hash = bcrypt.hashSync(password, salt)
           //we are going to take in hash as the password parameter so that we are not storing the password on the database
           const registeredUser = await db.register_user({login_name, email, hash})
           let user = registeredUser[0]
           req.session.user = {
               //the name on the left side is what the front end will see when refering to the key value pair ie obj
                user_id: user.user_id,
                email: user.email,
                login_name: user.login_name,  
                admin_user: user.admin_user

           }
           console.log(req.session.user)
           res.status(201).send(req.session.user)
       }
       
   }
}