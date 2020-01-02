require('express-group-routes')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const port =  process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())



const { auth, authorized, authenticated } = require("./middleware");

const HomeController = require('./controllers/home')
const CategoryController = require('./controllers/categories')
const Login = require('./controllers/login')
const Register = require('./controllers/register')
const Event = require('./controllers/events')
const Users = require('./controllers/users')
const Orders = require('./controllers/orders')

app.group("/api/v1", (router) => {
    router.get('/categories', HomeController.showCategories)  
    router.get('/events',HomeController.showEvents)
    router.get('/events?title=',HomeController.showEvents)
    router.get('/events?start_time=',HomeController.showEvents)
    router.get('/events?start_time_gte=',HomeController.showEvents) 
    
    router.get('/category/:id/events',CategoryController.showEventsByCategory)

    router.post('/login',Login.login)
    router.post('/register',Register.register)

    router.get('/event/:id',Event.showDetailEvent)

    router.post('/profile',auth,Users.showUserProfil)
    router.get('/user/:id/favorite',Users.showUserFavorite)

    router.post('/event',auth,Event.addEvents)

    router.post('/order',auth,Orders.addOrder)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))