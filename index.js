const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

const HomeController = require('./controllers/home')

app.group("/api/v1", (router) => {
    router.get('/categories', HomeController.showCategories)  
    router.get('/events',HomeController.showEvents)
    router.get('/events?title=',HomeController.showEvents)
    router.get('/events?start_time=',HomeController.showEvents)
    router.get('/events?start_time_gte=',HomeController.showEvents)  
})


app.listen(port, () => console.log(`Listening on port ${port}!`))