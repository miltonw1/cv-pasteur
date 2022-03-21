import { Response } from 'express';

export function commonExpressError (res: Response) {
    return (err: Error) => {
        return res.status(500).send(err)
    }
}
