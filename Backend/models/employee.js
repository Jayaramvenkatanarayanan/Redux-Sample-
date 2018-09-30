var mongoose = require('mongoose');
const Validator = require('validator');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

var EmployeeSchema = new mongoose.Schema({

   username: {
      type: String,
      require: true,
      trim: true,
      minlength: 3
   },
   email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      validate: {
         validator: Validator.isEmail,
         message: '{VALUE} is not valid email'
      }
   },
   password: {
      type: String,
      require: true,
      minlength: 5
   },
   tokens: [{
      access: {
         type: String,
         require: true
      },
      token: {
         type: String,
         require: true
      }
   }],
   created_at: {
      type: Number
   },
   updated_at:{
       type: Number
   }
});


// generate token

EmployeeSchema.methods.generateAuthToken = function () {
   var employee = this;
   var access = 'auth';
   var token = jwt.sign({
      _id: employee._id.toHexString(),
      access
   }, 'abc123');
   employee.tokens.push({
      access,
      token
   });

   return employee.save().then(() => {
      return token;
   });
};

// user find

EmployeeSchema.statics.findByToken = function (token) {

   var EmployeeSchema = this;

   var decode;

   try {
   decode = jwt.verify(token,'abc123');
   } catch (e) {
   return  Promise.reject();
   }

  return EmployeeTable.findOne({
     '_id':decode._id,
     'tokens.token':token,
     'tokens.access':'auth'
  });
};

EmployeeSchema.statics.findByLogin = function (email,password) {

var EmployeeSchema = this;

return EmployeeSchema.findOne({email,password}).then((user)=>{

if(!user)
{
   return Promise.reject();
}

return user;

});

};

EmployeeSchema.methods.removetoken = function(token)
{
  var employee =this;
  return employee.update({
     $pull:{
        tokens:{
           token
        }
     }
  });
};
var EmployeeTable = mongoose.model('emp_table', EmployeeSchema);

module.exports = {
   EmployeeTable
}