var express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');
var {mongoose} = require('./db/mongoose');
var {EmployeeTable} = require('./models/employee');
var {Authcheck} = require('./middleware/authcheck');
var {DepartTable} = require('./models/emp_depart');
const fs = require('fs');
var app = express();

app.use(bodyParser.json());

//create User

app.post('/adduser',(req,res)=>{
var employee = new EmployeeTable({
   username : req.body.username,
   email:req.body.email,
   password:req.body.password,
   created_at:_.now(),
   updated_at:_.now()
});
 employee.save().then(()=>{
  //return employee.generateAuthToken();

  }).then((token)=>{
    res.header('x-auth',token).send(JSON.stringify({result:employee,Message:'user added',status:true}));

  }).catch((e)=>{
    res.status(400).send(JSON.stringify({status:false,restult:e}));
  });

});

// find User auth
app.get('/login_check_Auth',Authcheck,(req,res)=>{

res.send(req.user);

});


// login

app.post('/login',(req,res)=>{

var body = _.pick(req.body,['email','password']);

EmployeeTable.findByLogin(body.email,body.password).then((employee)=>{
  return  employee.generateAuthToken().then((token)=>{
   res.header('x-auth',token).send({result:employee,Message:'Login successful,session started',status:true});
  });
}).catch((e)=>{
res.status(401).send(JSON.stringify({status:false,restult:e}));
});


});

// Logout

app.delete('/logout',Authcheck,(req,res)=>{
  //var adduser = new Usertable();
  req.user.removetoken(req.token).then(()=>{
    res.status(200).send(JSON.stringify({Message:'Session closed',status:true}));
  }),(e)=>{
     res.status(400).send(JSON.stringify({result:e,status:false}));
  };

});

// Emp depart models

//Add

app.post('/addDepartment',Authcheck,(req,res)=>{
  var add = new DepartTable({
     depart_id:req.body.depart_id,
     depart_name:req.body.depart_name,
     employee_name:req.body.employee_name,
     created_at: _.now(),
     updated_at: _.now(),
     create_by_id:req.user._id
  });
  add.save().then((doc)=>{
   res.send(JSON.stringify({result:doc,Message:'Department  Added',status:true}));
  },(e)=>{
    res.status(400).send(JSON.stringify({result:e,status:false}));
  });
});


//Read


app.get('/getall_Departmets',Authcheck,(req,res)=>{

  DepartTable.find({create_by_id:req.user._id}).then((result)=>{
    res.send({result,status:true,Message:'Get all records'})
  },(e)=>{
    res.status(400).send(JSON.stringify({status:false,restult:e}));
  });

});

//Delete

app.delete('/delete/:depart_id',Authcheck,(req,res)=>{

var departID = req.params.depart_id;

DepartTable.findOne({depart_id:departID}).count().then((count)=>{
console.log(count);
  DepartTable.remove({depart_id:departID,create_by_id:req.user._id}).then((result)=>{
    res.send({result:result,status:true,Message:'Deleted'});
  },(e)=>{
    res.status(400).send(JSON.stringify({status:false,restult:e}));
  });

});
});


// Update records


app.patch('/update_Department',Authcheck,(req,res)=>{

var body = _.pick(req.body,['depart_id','depart_name','employee_name']);

 var depart_id = body.depart_id;

//res.send(email);
DepartTable.find({depart_id:depart_id}).count().then((count)=>{

if(count === 1)
{
  DepartTable.update({depart_id: body.depart_id,create_by_id:req.user._id},{$set:body}).then((result)=>{
    res.send({result:result,status:true,Message:'Updated'});
  },(e)=>{
    res.status(400).send(JSON.stringify({status:false,restult:e}));
  });
}else{
  res.send(404).send(e);
}
},(e)=>{
res.status(400).send(JSON.stringify({status:false,restult:e}));
});

});



app.listen(3000,()=>{
console.log('server started 3000');
});

module.exports = app;