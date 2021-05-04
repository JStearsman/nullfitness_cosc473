module.exports = (req,res) =>{
  if(!req.session.userId){
  return res.render('login')
  }
  return res.redirect("/")
}
