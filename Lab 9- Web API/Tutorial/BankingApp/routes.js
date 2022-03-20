import express from 'express'

const router = express.Router()

router.route('/api')
    .get((req, res) => {
        res.send('Welcome to my server api root node')
    })

export default router
