import { Request, Response } from 'express'


export class GenericCrudController {
    model: any

    routeKey: string

    constructor (model: any, routeKey: string) {
        this.model = model

        console.log('recibo modelo', { model })
        this.routeKey = routeKey
    }

    createDataMapper (req: Request): unknown {
        return req.body
    }

    updateDataMapper (req: Request): unknown {
        return req.body
    }

    list (_: Request, res: Response) {
        this.model.findAll()
            .then(res.json)
            .catch((err: Error) => {
                return res.status(500).send(err)
            })
    }

    async get (req: Request, res: Response) {
        const id = Number(req.params[this.routeKey])

        try {
            const element = await this.model.findByPk(id);

            return res.json(element)
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    async create (req: Request, res: Response) {
        const data = this.createDataMapper(req)

        try {
            const element = await this.model.create(data);

            return res
                .status(201)
                .json(element);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async update (req: Request, res: Response) {
        const id = Number(req.params[this.routeKey])

        const data = this.updateDataMapper(req)

        try {
            const element = await this.model.findByPk(id);

            element.set(data)

            element.save()

            return res
                .status(202)
                .json(element)
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    async remove (req: Request, res: Response) {
        const id = Number(req.params[this.routeKey])

        try {
            const element = await this.model.findByPk(id);

            element.remove()

            return res
                .status(204)
                .json(element)
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}
