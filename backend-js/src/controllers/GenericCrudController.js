class GenericCrudController {
  constructor (model, routeKey) {
    this.model = model

    this.routeKey = routeKey
  }

  createDataMapper (req) {
    return req.body
  }

  updateDataMapper (req) {
    return req.body
  }

  list (_, res) {
    this.model.findAll()
      .then(res.json)
      .catch((err) => {
        return res.status(500).send(err)
      })
  }

  async get (req, res) {
    const id = Number(req.params[this.routeKey])

    try {
      const element = await this.model.findByPk(id)

      return res.json(element)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async create (req, res) {
    const data = this.createDataMapper(req)

    try {
      const element = await this.model.create(data)

      return res
        .status(201)
        .json(element)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async update (req, res) {
    const id = Number(req.params[this.routeKey])

    const data = this.updateDataMapper(req)

    try {
      const element = await this.model.findByPk(id)

      element.set(data)

      element.save()

      return res
        .status(202)
        .json(element)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async remove (req, res) {
    const id = Number(req.params[this.routeKey])

    try {
      const element = await this.model.findByPk(id)

      element.remove()

      return res
        .status(204)
        .json(element)
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}

module.exports = { GenericCrudController }
