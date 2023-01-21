const Blog = require('../models/blog')
const forEach = require('../challengeFour')

const dataController = {
  index (req, res, next) {
    res.locals.data.blogs = Blog
    next()
  },
  show (req, res, next) {
    forEach(Blog, (i) => {
      if (req.params.id == i.id) {
        res.locals.data.blog = i
      }
    })
    next()
  },
  create (req, res, next) {
    Blog.push(req.body)
    const createdBlog = Blog[Blog.length - 1]
    res.locals.data.blog = createdBlog
    next()
  }
}

module.exports = dataController
