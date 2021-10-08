// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.get()
        .then(rows => {
            res.json(rows)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resources.create(req.body)
        res.json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router