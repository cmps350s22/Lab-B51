import express from 'express'
import router from './app/router.js'
import morgan from 'morgan'
import mongoose from "mongoose";

//port number
const port = 5000
const app = express()

const uri = 'mongodb://127.0.0.1:27017/b54-db'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(uri, options, () => {
    console.log(`database connection established`)
})

//two types [dynamic , static]
app.use(express.static('public-replace-me-with-handlebars'))
//a middleware
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

//CRUD operations on
app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})

//single purpose
//separation of concerns [design pattern]

//repository : the only class allowed to talk to our data
//service : the only class that can communicate with the repo
//router : responsible for handling all the routing
//app for server configurations

