const {Strategy} = require('passport-jwt');
const User = require('../models/User');
const {SECRET} = require('../config');

//custom cookie extractor
var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies) {token = req.cookies['jwt']};
    return token;
  };
//boilerplate taken from passport docs.
module.exports = (passport) => {
    var opts = {};
    opts.jwtFromRequest = cookieExtractor; 
    opts.secretOrKey = SECRET;
    passport.use(new Strategy(opts, async(payload, done) =>{
        await User.findById(payload.user_id).then(async user =>{
            if(user){
                return done(null, user);
            }
            return done(null, false)
        }).catch((err)=>{
            return done(null, false);
        })
    }))
}