import express from 'express'
import router from './router.js'

const app = express()
const port = process.env.PORT || 5000
/*
    export PORT = 2000 [mac in terminal]
    set PORT = 2000 [window in cmd]
    npm i -g nodemon [to install nodemon]
 */

//middlewares
app.use(express.static('public'))
app.use(express.json())
app.use('/api', router)


app.listen(port, ()=>{
    console.log(`server is listening on http://localhost:${port}`)
})
