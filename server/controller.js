module.exports = {
   login: async (req,res) => {
       const db = req.app.get('db')
       const { login_name, password } = req.body
       const login = await db.user_login({login_name, password})

       res.status(200).send(login)
   } 
}