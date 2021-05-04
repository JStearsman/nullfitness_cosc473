module.exports = (req,res) =>{
  if(isAdmin){
  return res.render('adminDashboard')
}
  return res.redirect('/')
}
