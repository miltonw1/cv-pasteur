const error = require('../utils/errors').commonExpressError

function getModel (model, routeKey) {
  return (req, res, next) => {
    const id = Number(req.params[routeKey])

    model.findByPk(id)
      .then((element) => {
        if (!element) {
          return res.status(404).send({ message: 'Not found' })
        }

        req.model = element

        next()
      })
      .catch(error(res))
  }
}

module.exports = { getModel }
