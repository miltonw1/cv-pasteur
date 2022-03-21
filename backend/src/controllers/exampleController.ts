import { Request, Response } from 'express'

export function helloWorld (_: Request, res: Response) {
    res.send("Hello World!")
}
