const router = require('express').Router()
const controller = require('./controller')

router.post('/write', controller.write)
router.get('/list', controller.list)
router.post('/find', controller.findOne)

module.exports = router