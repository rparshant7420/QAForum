require('../models/registerModel');
require('../models/adddedQuestion');
require('../config/passportConfig');

const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
// const passportLocal = require('passport-local').Strategy;

var Registers = mongoose.model('RegisteredUser');
var addedQuestion = mongoose.model('DBforQuestion');

// TO REGISTER NEW USER

module.exports.AddUsers=(req,res)=>{
    var newRegisters = new Registers({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    });
    newRegisters.save().then((docs)=>{
      return res.status(201).json({
        success:true,
        message:"Added new user successfully",
        data:docs
      })
    }).catch((err)=>{
      return res.status(401).json({
        success:false,
        message:"Error in adding new user",
        error:err.message
      })
    })
}

// TO CHECK AUTHENTICATION(ON SIGN IN) AND CREATE TOKEN OF USER

module.exports.authenticate=(req,res,next)=>{
  passport.authenticate('local',(err,userinfo,info)=>{
      if(err)return res.status(404).json(err);
      if(userinfo) return res.status(200).json({
          "token":jwt.sign({_id:userinfo._id},"SecretKey",{expiresIn:'20m'}),
          "userinfo":userinfo
      });
      if(info) return res.status(401).json(info);
  })(req,res,next);
}

// TO GET USER BY ID

module.exports.GetUsers=(req,res)=>{
  Registers.findById({_id:req.params.id}).then((docs)=>{
    return res.status(200).json({
      success:true,
      message:"user found",
      data:docs
    })
  }).catch((err)=>{
    return res.status(404).json({
      success:false,
      message:"Error in finding user",
      error:err.message
    })
  })
}

// EDIT USER PROFILE

module.exports.updatedUsers=(req,res)=>{
  var updatedData = {
    name:req.body.name,
    email:req.body.email
  }
  Registers.findByIdAndUpdate({_id:req.params.userid},{$set:updatedData},{new:true}).then((docs)=>{
    // {new:true} is written so that it show new values in postman too
    return res.status(200).json({
        success:true,
        message:'UserData updated',
        data:docs
    })
    .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'Error in updating UserData',
            err:err.message
        })
    })
})
}

// TO ADD QUESTIONS

module.exports.addQue=(req,res)=>{
    var newQuestion = new addedQuestion({
    category:req.body.category,
    question:req.body.question,
    questionInfo:req.body.questionInfo,
    userID:req.body.userID
  });
  newQuestion.save().then((docs)=>{
    return res.status(200).json({
      success:true,
      message:"Added new question successfully",
      data:docs
    })
  }).catch((err)=>{
    return res.status(404).json({
      success:false,
      message:"Error in adding new question",
      error:err
    })
  })
}

// TO CHECK ADDED QUESTIONS

module.exports.getQuestion=(req,res)=>{
  addedQuestion.findById({_id:req.params._id}).populate('userID').exec().then((docs)=>{
  return res.status(200).json({
    success:true,
    message:"Question found successfully",
    data:docs
  })
  }).catch((err)=>{
    return res.status(404).json({
      success:false,
      message:"Error in finding question",
      error:err.message
    })
  })
}

// TO CHECK ADDED  ALL QUESTIONS BY USERID

module.exports.getQuestions=(req,res)=>{
  return addedQuestion.find({userID:req.params._id}).then((docs)=>{
     res.status(200).json({
      success:true,
      message:"Questions found successfully",
      data:docs
    })
    }).catch((err)=>{
       res.status(404).json({
        success:false,
        message:"Error in finding questions",
        error:err.message
      })
    })
}
