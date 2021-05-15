require('../models/addAnswer');
const mongoose = require('mongoose');

var Answer = mongoose.model('DBforAnswer')

module.exports.addAnswer=(req,res)=>{
  var newAnswer = new Answer({
    answer:req.body.answer,
    answeredBy:req.body.answeredBy,
    answeredFor:req.body.answeredFor,
  });
  return newAnswer.save().then((docs)=>{
      res.status(201).json({
        success:true,
        message:"Added new answer successfully",
        data:docs
      })
  }).catch((err)=>{
    res.status(401).json({
      success:false,
      message:'Error in adding new answer',
      error:err.message
    })
  })
}

// GET THIS ANSWER

module.exports.getAnswer=(req,res)=>{
  return Answer.findById({_id:req.params.ansId}).populate('answeredBy').populate('answeredFor').exec().then((docs)=>{
    res.status(200).json({
      success:true,
      message:'Found answer successfully',
      data:docs
    })
  }).catch((err)=>{
    res.status(401).json({
      success:false,
      message:'Error in finding answer',
      error:err.message
    })
  })
}
