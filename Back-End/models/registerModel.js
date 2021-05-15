const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.set('useCreateIndex', true);

var RegisterSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name should be entered"],
    minlength:[3,"Name should be greater than 3 words"]
  },
  email:{
    type:String,
    required:[true,"Email should be entered"],
    unique:true
  },
  password:{
    type:String,
    required:[true,"Password should be entered"],
    minlength:[8,"Password should contain minimum 8 characters"],
    maxlength:[14,"Password can only have 14 maximum characters"]
  },
  saltString:{
    type:String
  }
})

// FOR ENCRYPTION OF PASSWORD

RegisterSchema.pre('save',function(next){
  bcrypt.genSalt(15,(err,salt)=>{
    bcrypt.hash(this.password,salt,(err,hash)=>{
      this.password=hash,
      this.saltString=salt,
      next()
    })
  })
})

// FOR COOMPARING PASSWORD

RegisterSchema.methods.verifyPassword=function(password){
  return bcrypt.compareSync(password,this.password);
}

mongoose.model('RegisteredUser',RegisterSchema);
