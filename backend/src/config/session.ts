import passport from 'passport'
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt'

import User from '../models/user'
import { Identifier } from 'sequelize/types'

const JwtStrategy = new Strategy(
    {
        secretOrKey: process.env.SESSION_PRIVATE_KEY,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    ({ sub }: { sub: Identifier }, done: VerifiedCallback) => {
        User.findByPk(sub)
            .catch(err => {
                done(err, false)
            })
            .then(user => {
                done(null, user || false) // asi lo hace en la doc http://www.passportjs.org/packages/passport-jwt/
            })
    }
)

passport.use(JwtStrategy)
