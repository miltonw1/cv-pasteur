declare global{
    namespace Express {
        interface Request {
            model: any
        }
    }
}
