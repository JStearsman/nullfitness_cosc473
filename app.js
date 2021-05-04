const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
app.use(express.static('public'))
app.set('view engine', 'ejs')

const expressSession = require('express-session')
app.use(expressSession({
	secret: 'v4Gf62SacJ8J7p3R44s',
	cookie: {
		maxAge: (60 * 1000 * 5) //5 min timeout for testing
	}
}))

//Establish if user is logged in and signals var loggedIn
global.loggedIn = null;
app.use("*", (req,res,next) =>{
	loggedIn = req.session.userId;
	next()
})

//Declare Global loggedUser as session Username
global.loggedUser = null;
app.use("*", (req,res,next) =>{
	loggedUser = req.session.username;
	next()
})

//Establish if user is logged in and signals var loggedIn
global.isAdmin = null;
app.use("*", (req,res,next) =>{
	isAdmin = req.session.admin;
	next()
});

const logoutUserController = require('./controllers/logoutUser')
app.get('/logout', logoutUserController)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nullfitness', {useNewUrlParser: true})

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const landingPageController = require('./controllers/landingPage')
const loginPageController = require('./controllers/loginPage')
const registerPageController = require('./controllers/registerPage')
const elevateToAdminPageController = require('./controllers/elevateToAdminPage')
const dashPageController = require('./controllers/dashboardPage')
const adminDashPageController = require('./controllers/adminDashboardPage')
const userProfController = require('./controllers/userProfilePage')
const workoutBuilderPageController = require('./controllers/workoutBuilderPage')

const loginUserController = require('./controllers/loginUser')
app.post('/users/login', loginUserController)

const workoutBuilderController = require('./controllers/userWorkoutBuilder')
app.post('/users/workoutbuilder', workoutBuilderController)

const storeUserController = require('./controllers/storeUser')
app.post('/users/register', storeUserController)

const elevateToAdminController = require('./controllers/elevateToAdmin')
app.post('/users/elevatetoadmin', elevateToAdminController)

const storeProfPageController = require('./controllers/storeProfilePage')
app.post('/users/userprofile', storeProfPageController)

const storeWeightController = require('./controllers/storeWeight')
app.post('/users/storeWeight', storeWeightController)

const changeWorkoutOptionController = require('./controllers/changeUserWorkout')
app.post('/users/changeWorkoutOption', changeWorkoutOptionController)

app.listen(3000, ()=>{
	console.log('listening on port 3000')
})


app.get('/', landingPageController)
app.get('/login', loginPageController)
app.get('/register', registerPageController)
app.get('/elevatetoadmin', elevateToAdminPageController)
app.get('/dashboard', dashPageController)
app.get('/admindashboard', adminDashPageController)
app.get('/userProfile', userProfController)
app.get('/workoutbuilder', workoutBuilderPageController)


app.get('*',(req,res)=>{
	res.render('404')
})
