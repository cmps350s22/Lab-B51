import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Hello welcome to my server')
})

app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`)
})
