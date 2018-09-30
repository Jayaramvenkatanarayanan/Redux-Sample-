var mongoose = require('mongoose');

var EmpDepart = new mongoose.Schema({

   depart_id: {
      type: Number,
      require: true,
      unique: true
   },
   depart_name: {
      type: String,
      require: true,
      trim: true
   },
   employee_name: {
      type: String,
      require: true,
      trim: true,
      minlength: 3
   },
   created_at: {
      type: Number
   },
   updated_at:{
       type: Number
   },
   create_by_id:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
   }
});

var DepartTable = mongoose.model('emp_depart', EmpDepart);

module.exports={
   DepartTable
}