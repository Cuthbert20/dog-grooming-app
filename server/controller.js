module.exports = {
   login: async (req,res) => {
       const db = req.app.get('db')
       const { login_name, password } = req.body
       const login = await db.user_login({login_name, password})
       //here we are putting user on session. We can now access the whole user object on front end.
        req.session.user = login[0]
        console.log(req.session)
       res.status(200).send(req.session.user)
   } 
}