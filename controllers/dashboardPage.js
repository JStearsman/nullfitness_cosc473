const weightdata = require('../models/userweight')
const workoutdata = require('../models/workouts')
const userprofiledata = require('../models/userprofile')
const userworkoutdata = require('../models/userworkout')

module.exports = async(req,res) =>{
  if(req.session.userId){
    const query = { userid: req.session.userId }
    const workoutOption = await userworkoutdata.findOne(query).exec()
    const search = { routineName: workoutOption.routineName }
    console.log(search)
    const profile = await userprofiledata.findOne(query).exec()
    const workouts = await workoutdata.find(search).exec()
    const weights = await weightdata.find(query).sort({date: 1}).exec()
    let fname = profile.firstName
    let workout_name = workoutOption.routineName
    let xData = []
    let yData = []
    for (var i = 0; i < weights.length; i++) {
      xData.push(weights[i].date)
      yData.push(weights[i].weight)
    }
    console.log("-----------------")
    console.log("WORKOUT LIST")
    console.log("-----------------")
    console.log(workouts)
    console.log("-----------------")
    console.log("WEIGHT DATA")
    console.log("-----------------")
    console.log(weights)
    console.log("-----------------")
    console.log("NAME")
    console.log("-----------------")
    console.log(fname )
    console.log("-----------------")
    console.log(xData)
    console.log(yData)
    return res.render('dashboard', { dataX: xData, dataY: yData, weights, workouts, profile, first_name: fname, workout_name: workout_name })
}
  res.redirect('/')
}
