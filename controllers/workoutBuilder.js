const workouts = require('../models/workouts')

module.exports = (req, res) => {
  const { muscleGroup } = req.body;

  workouts.find({muscleGroup:muscleGroup},(error,user) =>{ })
}
  
