const user = require('../models/user.js')
const path = require('path')

module.exports = (req, res) => {
  const username = req.body;
  const updated = {$set:{adminStatus: true}}
  user.findOneAndUpdate(username, updated, {new: true}, (err, result) => {
    if (err) {
    console.log("Update could not be processed")
    console.log(err)
    console.log(username)
    return res.redirect('/elevateToAdmin');
  }
      console.log("Update Processed")
      console.log(result)
      return res.redirect("/adminDashboard")
  })
}
