const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userInfoSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  adminStatus:{
    type: Boolean,
    required: false,
	default: false
  }
});

userInfoSchema.pre('save', function(next){
  const user = this

  bcrypt.hash(user.password, 5,(error,hash) =>{
    user.password = hash
    next()
  })
})

const userInfo = mongoose.model('UserInfo', userInfoSchema);
module.exports = userInfo
