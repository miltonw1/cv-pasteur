import passport from 'passport'

const checkSession = passport.authenticate('jwt', { session: false })

module.exports = { checkSession }
