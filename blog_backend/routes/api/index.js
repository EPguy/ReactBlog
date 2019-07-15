const router = require('express').Router()
const authMiddleware = require('../../middlewares/auth')
const auth = require('./auth')
const user = require('./user')
const post = require('./post')

router.use('/auth', auth)
router.use('/user', authMiddleware)
router.use('/user', user)
router.use('/post', authMiddleware)
router.use('/post', post)

module.exports = router