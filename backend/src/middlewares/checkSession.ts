import passport from 'passport'

export const checkSession = passport.authenticate('jwt', { session: false })
