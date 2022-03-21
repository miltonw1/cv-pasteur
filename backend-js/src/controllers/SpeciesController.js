const Species = require('../models/species')
const error = require('../utils/errors').commonExpressError

const routeKey = 'speciesId'

function list (_, res) {
  Species.findAll()
    .then(res.json)
    .catch((err) => {
      console.error(err)
      res.send(err)
    })
}

function get (req, res) {
  const id = Number(req.params[routeKey])

  Species.findByPk(id)
    .then((element) => {
      if (!element) {
        return res.status(404).send({ message: 'Not found' })
      }

      res.json(element)
    })
    .catch(error(res))
}

function create (req, res) {
  Species.create(req.body)
    .then(res.status(201).json)
    .catch(error(res))
}

function update (req, res) {
  const id = Number(req.params[routeKey])

  Species.findByPk(id)
    .then((element) => {
      if (!element) {
        return res.status(404).send({ message: 'Not found' })
      }
      element.set(req.body)

      element.save()

      res.json(element)
    })
    .catch(error(res))
}

function remove (req, res) {
  const id = Number(req.params[routeKey])

  Species.findByPk(id)
    .then((element) => {
      if (!element) {
        return res.status(404).send({ message: 'Not found' })
      }

      element.destroy()

      return res.status(204).json(element)
    })
    .catch(error(res))
}

module.exports = { list, get, create, update, remove }
