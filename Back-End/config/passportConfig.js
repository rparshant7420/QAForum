const passport = require('passport');
const localPassport = require('passport-local').Strategy;
const mongoose = require('mongoose');

require('../models/registerModel');

var Adminmodel = mongoose.model('RegisteredUser');

passport.use(new localPassport({usernameField:'email'},
(username,password,done)=>{
  Adminmodel.findOne({email:username},(err,userinfo)=>{
    if (err)
    return done(err);
    else if (!userinfo)
    return done(null,false,{message:"Email is not registered"})
    else if (!userinfo.verifyPassword(password))
    return done(null,false,{message:"Passsword doesn't match",result:userinfo.verifyPassword(password)});
    else
    return done(null,userinfo);
  })
}))
