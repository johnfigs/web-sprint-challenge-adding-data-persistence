// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.get()
        .then(rows => {
            res.json(rows)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await Tasks.create(req.body)
        res.json(newTask)
    } catch (err) {
        next(err)
    }
})
module.exports = router