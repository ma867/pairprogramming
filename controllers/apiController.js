const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.blogs)
  },
  show (req, res, next) {
    res.json(res.locals.data.blog)
  }
}

module.exports = apiController
