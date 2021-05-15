require('../models/registerModel');

const mongoose = require('mongoose');


var UserCredentials = mongoose.Schema({
  contact:{
    type:Number,
    // min:[10,"Contact should have min. 10 digits"],
    // max:[1000,"Contact can not be greater than 10 digits"]
  },
  location:{
    type:String,
  },
  languages:{
    type:String,
    required:[true,"You should enter languages that you know"]
  },
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'RegisteredUser'
  }
})

mongoose.model('Credentials',UserCredentials)
