const Blog = require('../models/blog')

const dataController = {
    index(req, res, next) {
        res.locals.data.blogs = Blog
        next()
    },
    show(req, res, next) {
        for (let i = 0; i < Blog.length; i++) {
            if (req.params.id == Blog[i].id) {
                res.locals.data.blog = Blog[i]
            }
        }
        next()
    },
    create(req, res, next) {
        Blog.push(req.body)
        const createdBlog = Blog[Blog.length-1]
        res.locals.data.blog = createdBlog
        next()
    }
}

module.exports = dataController