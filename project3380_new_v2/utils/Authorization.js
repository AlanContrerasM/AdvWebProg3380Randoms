const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {SECRET} =require('../config');
const passport = require('passport');

const userRegister = async (user, res) => {
    try {
      // validate the email
      let taken = await repeatedEmail(user.email);
      if (taken) {
        return res.status(400).json({
          message: `Email is in use`,
          success: false
        });
      }
  
      // encrypt password
      const password = await bcrypt.hash(user.password, 12);
      // create a new user
      const newUser = new User({
        ...user,
        password
      });
  
      await newUser.save();
      return res.status(201).json({
        message: "User registered",
        success: true
      });
    } catch (err) {
      
      return res.status(500).json({
        message: "Something wrong happened when creating the account",
        err,
        success: false
      });
    }
};


const userLogin = async (user, res) =>{
    let {email, password} = user;
    //does user exist?
    const userDB = await User.findOne({email});
    if(!userDB){
        return res.status(404).json({
            message: `email is not found, invalid login credentials.`,
            success: false
          });
    }

    
    let matches = await bcrypt.compare(password, userDB.password);
    if(matches){
        //create access token
        let token = jwt.sign(
            {
                user_id: user._id,
                email: user.email
            }, 
            SECRET, 
            {expiresIn: "2d"} 
        );

        let result = {
            email: user.email,
            expiresIn: 48
        }

        res.cookie("jwt", token, {
            httpOnly: true,
            sameSite: "strict",
        });

        return res.status(200).json({
            ...result,
            message: "User is now logged in",
            success: true
          });

    }else{
        return res.status(403).json({
            message: `Incorrect password`,
            success: false
          });
    }


}


const repeatedEmail = async email =>{
    let user = await User.findOne({email});
    return user ? true : false;
}


//auth
const userAuthorization = (req,res,next) => passport.authenticate('jwt', {session:false}, function(err, user, info) {
    if (err || !user ) { 
        res.clearCookie('jwt');
        res.status(401).send({
            message: "authentication failed, please sign in again for new token",
            success: false
        });
    }else{
        //success
        req.user = user;
        return next();
    }
  })(req, res, next);

//this is to protect password
const protectedUser = user => {
    return {
        email: user.email,
        _id: user._id,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt
    }
}

module.exports = {
    userRegister,
    userLogin,
    userAuthorization,
    protectedUser,
}