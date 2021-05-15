require('./registerModel');

const mongoose = require('mongoose');

var Questions = mongoose.Schema({
  category:{
    type:String,
  },
  question:{
    type:String,
    required:[true,"Question should not be left empty"],
    // minlength:[10,'Question should have minimum 10 Characters']
  },
  questionInfo:{
    type:String,
    required:[true,"Details of question should not be left empty"],
  },
  date:{
    type:Date,
    default:Date.now()
  },
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'RegisteredUser',
    required:true
  }
})

mongoose.model('DBforQuestion',Questions);
