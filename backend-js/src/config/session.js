const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require('../database/models/user')

const JwtStrategy = new Strategy(
  {
    secretOrKey: process.env.SESSION_PRIVATE_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  ({ sub }, done) => {
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
