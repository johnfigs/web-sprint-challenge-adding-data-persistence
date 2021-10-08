// build your `/api/resources` router here
const express = require('express')

const db = require('../../data/dbConfig')

const router = express.Router()

router.get('/', (req, res, next) => {
    throw new Error('ARGH')
    res.json({ api: 'up'})
})

module.exports = router