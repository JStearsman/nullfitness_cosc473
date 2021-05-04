const userlist = require('../models/user')

module.exports = async(req,res) =>{
  if(isAdmin){
  const users = await userlist.find({})
  console.log(users)
  return res.render('elevatetoadmin', { users })
  }
return res.redirect("/")
}
