const userprofile = require('../models/userprofile.js')
const path = require('path')

module.exports = (req, res) => {
  userprofile.create({...req.body, userid: req.session.userId }, (error, userprofile) =>{
    if(error){
      console.log(error)
      return res.redirect('/register')
    }
    res.redirect('/dashboard')
  })
}
