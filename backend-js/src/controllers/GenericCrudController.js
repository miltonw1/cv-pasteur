const error = require('../utils/errors').commonExpressError

function genericController (Model, routeKey) {
  return {
    list (_, res) {
      Model.findAll()
        .then(res.json)
        .catch((err) => {
          console.error(err)
          res.send(err)
        })
    },

    get (req, res) {
      const id = Number(req.params[routeKey])

      Model.findByPk(id)
        .then((element) => {
          if (!element) {
            return res.status(404).send({ message: 'Not found' })
          }

          res.json(element)
        })
        .catch(error(res))
    },

    create (req, res) {
      Model.create(req.body)
        .then(res.status(201).json)
        .catch(error(res))
    },

    update (req, res) {
      const id = Number(req.params[routeKey])

      Model.findByPk(id)
        .then((element) => {
          if (!element) {
            return res.status(404).send({ message: 'Not found' })
          }
          element.set(req.body)

          element.save()

          res.json(element)
        })
        .catch(error(res))
    },

    remove (req, res) {
      const id = Number(req.params[routeKey])

      Model.findByPk(id)
        .then((element) => {
          if (!element) {
            return res.status(404).send({ message: 'Not found' })
          }

          element.destroy()

          return res.status(204).json(element)
        })
        .catch(error(res))
    }
  }
}

module.exports = genericController
