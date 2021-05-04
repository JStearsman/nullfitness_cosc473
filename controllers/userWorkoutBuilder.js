const userworkout = require('../models/userworkout.js')
const path = require('path')

module.exports = (req, res) => {
  userworkout.create({...req.body, userid: req.session.userId }, (error, userworkout) =>{
    if(error){
      console.log(error)
      return res.redirect('/')
    }
    res.redirect('/dashboard')
  })
}
