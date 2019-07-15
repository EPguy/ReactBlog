const Post = require('../../../models/post')
const User = require('../../../models/user')

exports.write = (req, res) => {
    const { title, body } = req.body;
    const create = (isTitle) => {
        if(isTitle) {
            throw new Error('Title exists')
        } else {
            Post.create(title,body, req.decoded.name)
            res.json({
                message: 'post created',
            })
        }
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }
    
    Post.findOneByTitle(title)
    .then(create)
    .catch(onError)
}

exports.findOne = (req, res) => {
    const { title } = req.body
    Post.findOneByTitle(title)
    .then(post => res.json(post))
}

exports.list = (req, res) => {
    Post.find({})
    .then(
        posts => {
            res.json(posts)
        }
    )
}