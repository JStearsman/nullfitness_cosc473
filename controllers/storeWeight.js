const userweight = require('../models/userweight.js')
const path = require('path')

module.exports = (req, res) => {
  userweight.create({...req.body, userid: req.session.userId }, (error, user) =>{
    if(error){
      console.log("ERROR STORING WEIGHT!")
      return res.redirect('/dashboard')
    }
    res.redirect('/dashboard')
  })
}
