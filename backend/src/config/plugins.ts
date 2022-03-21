import { Express } from 'express';

import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import methodOverride from 'method-override'

export function registerPlugins (app: Express): Express {
    app.use(methodOverride('_method'))

    if (process.env.NODE_ENV !== 'production') {
        app.use(cors())
        app.use(morgan('tiny'))
    } else {
        app.use(compression())
    }

    return app
}
