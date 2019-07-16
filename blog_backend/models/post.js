const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    title: String,
    body: String,
    username: String,
    publishedDate: {
        type: Date,
        default: new Date()
    }
})  

Post.statics.create = function(title, body, username) {
    console.log(username)
    const post = new this({
        title,
        body,
        username
    })
    return (
        post.save()
    )
}

Post.statics.findOneByTitle = function(title) {
    return this.findOne({
        title
    }).exec()
}

Post.statics.findOneByUserName = function(username) {
    return this.find({
        username
    }).exec()
}

module.exports = mongoose.model('Post', Post)