const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutsSchema = new Schema({
  routineName:{
    type: String,
    required: true,
  },
  workoutName:{
    type: String,
    required: true
  },
  workoutReps:{
    type: String,
    required: true
  },
  workoutImg:{
    type: String,
    required: true
  }
});

const workoutbuilder = mongoose.model('workoutbuilder', workoutsSchema);
module.exports = workoutbuilder
