const userworkout = require('../models/userworkout.js')
const path = require('path')

module.exports = (req, res) => {
  const user = { userid: req.session.userId }
  const update = {$set:{...req.body}}
  userworkout.findOneAndUpdate(user, update, {new: true}, (error, userworkout) => {
    if(error){
      console.log(error)
      return res.redirect('/dashboard')
    }
    console.log("Updated Workout Option")
    return res.redirect('/dashboard')
  })
}
