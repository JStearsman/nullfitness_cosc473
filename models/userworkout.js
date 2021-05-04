const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    userid:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserInfo',
      required: true
    },
    routineName:{
        type: String,
        required: true
    }
});

const userWorkout = mongoose.model('UserWorkout', userProfileSchema);
module.exports = userWorkout
