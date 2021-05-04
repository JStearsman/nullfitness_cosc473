const mongoose = require('mongoose')
const Schema = mongoose.Schema;


//Stores the User's Weight and collects a list of weight (Y-axis) & time created (X-axis)
//Chat.js will pull from this collection in order to render their weight chart
//Form input should be disabled if current date matches client date (prevent multiple inputs for the same day)

const userWeightSchema = new Schema({
    userid:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserInfo',
      required: true
    },
    weight:{
        type: Number,
        required: true
    },
    //date saves Date as a string instead of default date to store proper format for Chart.js
    date:{
      type: String,
      requird: true
    }
});

const userWeight = mongoose.model('UserWeight', userWeightSchema);
module.exports = userWeight
