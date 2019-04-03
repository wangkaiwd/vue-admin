/*
* 登录认证
* */
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const { privateKey } = require('config/common');
const User = require('models/User');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = privateKey;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  User.findById(jwt_payload.id)
    .then(
      user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      },
      err => done(err, false)
    );
}));
