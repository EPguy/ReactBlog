const jwt = require('jsonwebtoken')
const User = require('../../../models/user')

/*
    POST /api/auth
    {
        username,
        password
    }
*/

exports.register = (req, res) => {
    const { username, email, password } = req.body
    let newUser = null
    // create a new user if does not exist
    const create = (isName) => {
        if(isName) {
            throw new Error('username exists')
        } else {
            return User.create(username, email, password)
        }
    }

    // count the number of the user
    const count = (user) => {
        newUser = user
        return User.count({}).exec()
    }

    // assign admin if count is 1
    const assign = (count) => {
        if(count === 1) {
            return newUser.assignAdmin()
        } else {
            // if not, return a promise that returns false
            return Promise.resolve(false)
        }
    }

    // respond to the client
    const respond = (isAdmin) => {
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        })
    }

    // run when there is an error (username exists)
    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    // check username duplication
    User.findOneByName(username)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError)
}

exports.login = (req, res) => {
    const {username, password} = req.body
    const secret = req.app.get('jwt-secret')

    const check = (user) => {
        if(!user) {
            console.log(req.body)
            throw new Error('login failed')
        } else {
            if(user.verify(password)) {
                const p = new Promise((resolve, reject) => {
                    jwt.sign(
                        {
                            _id: user._id,
                            name: user.username,
                            admin: user.admin
                        },
                        secret,
                        {
                            expiresIn: '7d',
                            subject: 'userInfo'
                        }, (err, token) => {
                            if(err) reject(err)
                            resolve(token)
                        })
                })
                return p
            } else {
                throw new Error('login failed')
            }
        }
    }

    const respond = (token) => {
        res.json({
            message:'logged in suceefully',
            token
        })
    }

    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }

    User.findOneByName(username)
    .then(check)
    .then(respond)
    .catch(onError)
}

exports.check = (req, res) => {
    res.json({
        success: true,
        info: req.decoded
    })
}