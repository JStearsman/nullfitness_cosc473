const mongoose = require('mongoose')
const userWork = require('./models/workouts')
mongoose.connect('mongodb://localhost/nullfitness', {useNewUrlParser: true})

//Use this file if the workoutlist collection doesn't exist to populate it
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

userWork.create({
  routineName: "Chest",
  workoutName: "Bench",
  workoutReps: "12",
  workoutImg: "Bench.png"
})

userWork.create({
  routineName: "Back",
  workoutName: "Deadlift",
  workoutReps: "10",
  workoutImg: "deadlift.png"
})

userWork.create({
  routineName: "Arms",
  workoutName: "Curls",
  workoutReps: "12",
  workoutImg: "curls.png"
})

userWork.create({
  routineName: "Legs",
  workoutName: "Dumbbell Squat",
  workoutReps: "8",
  workoutImg: "dbsquat.png"
})

userWork.create({
  routineName: "Chest",
  workoutName: "Flys",
  workoutReps: "12",
  workoutImg: "flutterkicks.png"
})

userWork.create({
  routineName: "Back",
  workoutName: "Pullup",
  workoutReps: "6",
  workoutImg: "pullup.png"
})

userWork.create({
  routineName: "Arms",
  workoutName: "Triceps Kickback",
  workoutReps: "12",
  workoutImg: "kickback.png"
})

userWork.create({
  routineName: "Legs",
  workoutName: "Split Squat",
  workoutReps: "12",
  workoutImg: "splitsquat.png"
})

userWork.create({
  routineName: "Back",
  workoutName: "Rows",
  workoutReps: "12",
  workoutImg: "dbrows.png"
})



console.log('DB pushed successfully')
