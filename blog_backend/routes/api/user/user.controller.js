const User = require('../../../models/user')

exports.list = (req, res) => {
    if(!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        })
    }

    User.find({})
    .then(
        users => {
            res.json({users})
        }
    )
}

exports.findUser = (req, res) => {
    User.findOneByName(req.decoded.name)
    .then(user => res.json(user))
}
exports.assignAdmin = (req, res) => {
    if(!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        })
    }

    User.findOneByUsername(req.params.username)
    .then(
        user => user.assignAdmin() 
    ).then(
        res.json({
            success: true
        })
    )
}