const passport = require('passport');
const User = require('../models/User');
const privateKey = require('../config/auth');
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = privateKey;

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  User.findById({ _id: jwt_payload._id })
    .then(
      user => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      err => done(err, false)
    );
}));
