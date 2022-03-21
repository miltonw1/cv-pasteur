import { Request, Response } from 'express';
import Species from "../models/species";
import { commonExpressError as error } from '../utils/errors'

const routeKey = 'speciesId';

export function list (_: Request, res: Response) {
    Species.findAll()
        .then(res.json)
        .catch((err: Error) => {
            console.error(err)
            res.send(err)
        })
}

export function get (req: Request, res: Response) {
    const id = Number(req.params[routeKey])

    Species.findByPk(id)
        .then((element) => {
            if (!element) {
                return res.status(404).send({ message: 'Not found' })
            }

            res.json(element);
        })
        .catch(error(res))
}

export function create (req: Request, res: Response) {
    Species.create(req.body)
        .then(res.status(201).json)
        .catch(error(res))
}

export function update (req: Request, res: Response) {
    const id = Number(req.params[routeKey])

    Species.findByPk(id)
        .then((element) => {
            if (!element) {
                return res.status(404).send({ message: 'Not found' })
            }
            element.set(req.body);

            element.save();

            res.json(element);
        })
        .catch(error(res))
}

export function remove (req: Request, res: Response) {
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
