require('../models/addCredentials');

const mongoose = require('mongoose');

var userCredentials = mongoose.model('Credentials');

// TO ADD CREDENTIALS

module.exports.Addcredentials=(req,res)=>{
  var newCredentials = new userCredentials({
    contact:req.body.contact,
    location:req.body.location,
    languages:req.body.languages,
    userID:req.body.userID
  });
  newCredentials.save().then((docs)=>{
    return res.status(201).json({
      success:true,
      message:"Added credentials successfully",
      data:docs
    })
  }).catch((err)=>{
    return res.status(404).json({
      success:false,
      message:"Error in adding Credentials",
      error:err.message
    })
  })
}

// TO CHECK CREDENTAILS

module.exports.FindCredentials=(req,res)=>{
  return userCredentials.find({userID:req.params.userID}).populate("userID").exec().then((docs)=>{
    res.status(200).json({
      success:true,
      message:'Found user credentails successfully',
      data:docs
  })
}).catch((err)=>{
  res.status(401).json({
      success:false,
      message:'Error in finding user credentials',
      error:err.message
  })
})
}
