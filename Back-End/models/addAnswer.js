const mongoose = require('mongoose');

require('./registerModel');
require('./adddedQuestion');


var addAnswer = mongoose.Schema({
answeredBy:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"RegisteredUser",
  required:[true,"User id is compulsary"]
},
answeredFor:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"DBforQuestion",
  required:[true,"Question id is compulsary"]
},
answer:{
  type:String,
  required:[true,"You should enter your answer"]
},
date:{
  type:Date,
  default:Date.now()
}
});

mongoose.model('DBforAnswer',addAnswer);
