const mongoose = require('mongoose')
const userWork = require('./models/workouts')
mongoose.connect('mongodb://localhost/nullfitness', {useNewUrlParser: true})

userWork.create({
  routineName: "Beginner",
  workoutName: "Squats",
  workoutReps: "10",
  workoutImg: "squats.png"
})

userWork.create({
  routineName: "Beginner",
  workoutName: "Bridges",
  workoutReps: "10",
  workoutImg: "bridges.png"
})

userWork.create({
  routineName: "Beginner",
  workoutName: "Crunches",
  workoutReps: "10",
  workoutImg: "crunches.png"
})

userWork.create({
  routineName: "Beginner",
  workoutName: "Flutterkicks",
  workoutReps: "10",
  workoutImg: "flutterkicks.png"
})

userWork.create({
  routineName: "Intermediate",
  workoutName: "Squats",
  workoutReps: "15",
  workoutImg: "squats.png"
})

userWork.create({
  routineName: "Intermediate",
  workoutName: "Bridges",
  workoutReps: "10",
  workoutImg: "bridges.png"
})

userWork.create({
  routineName: "Intermediate",
  workoutName: "Crunches",
  workoutReps: "15",
  workoutImg: "crunches.png"
})

userWork.create({
  routineName: "Intermediate",
  workoutName: "Flutterkicks",
  workoutReps: "20",
  workoutImg: "flutterkicks.png"
})

userWork.create({
  routineName: "Advanced",
  workoutName: "Squats",
  workoutReps: "25",
  workoutImg: "squats.png"
})

userWork.create({
  routineName: "Advanced",
  workoutName: "Bridges",
  workoutReps: "20",
  workoutImg: "bridges.png"
})

userWork.create({
  routineName: "Advanced",
  workoutName: "Crunches",
  workoutReps: "30",
  workoutImg: "crunches.png"
})

userWork.create({
  routineName: "Advanced",
  workoutName: "Flutterkicks",
  workoutReps: "40",
  workoutImg: "flutterkicks.png"
})

console.log('DB pushed successfully')
