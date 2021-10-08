// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.get()
        .then(rows => {
            res.json(rows)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Projects.create(req.body)
        res.json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router