import express from 'express'
import morgan from 'morgan'
import router from './routes.js'

const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(express.json())
app.use('/', router)

app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`)
})
