const router = require('express').Router()
const controller = require('./controller')

router.post('/write', controller.write)
router.get('/list', controller.list)
router.post('/find', controller.find)
router.post('/findOne', controller.findOne)

module.exports = router