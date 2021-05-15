const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/QAforumDB',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

}).catch((err)=>{
  console.log(err)
});
