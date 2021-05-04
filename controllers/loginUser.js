const bcrypt = require('bcrypt')
const user = require('../models/user.js')

module.exports = (req, res) => {
  const { username, password } = req.body;

  user.findOne({username:username},(error,user) =>{
    if(user){
      bcrypt.compare(password, user.password, (error,same) =>{
        if(user.adminStatus == true && same){
          req.session.userId = user._id
          req.session.username = user.username
          req.session.admin = user.adminStatus
          res.redirect('/admindashboard')
        }
		else if(same){
          req.session.userId = user._id
          req.session.username = user.username
          req.session.admin = user.adminStatus
          res.redirect('/dashboard')
		}
        else{
          res.redirect('/register')
        }
      })
    }
    else{
      res.redirect('/register')
    }
  })
}
