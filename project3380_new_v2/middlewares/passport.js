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
        // console.log("using passp", payload.user_id);
        await User.findById(payload.user_id).then(async user =>{
            if(user){
                // console.log("using passp: user found");
                return done(null, user);
            }
            console.log("using passp: user empty");
            return done(null, false)
        }).catch((err)=>{
            console.log("using passp: error with user search");
            return done(null, false);
        })
    }))
}