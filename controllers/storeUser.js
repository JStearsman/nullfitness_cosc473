const user = require('../models/user.js')
const path = require('path')

module.exports = (req, res) => {
  user.create(req.body, (error, user) =>{
    if(error){
      return res.redirect('/register')
    }
    res.redirect('/')
  })
}
