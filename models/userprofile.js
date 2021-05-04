const mongoose = require('mongoose')
const Schema = mongoose.Schema;


//Model stores non-changable information of the user

const userProfileSchema = new Schema({
    userid:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserInfo',
      required: true
    },
    firstName:{
        type: String,
        required: true
    },
    height:{
        type: Number,
        required: true
    }
});

const userProfile = mongoose.model('UserProfile', userProfileSchema);
module.exports = userProfile
