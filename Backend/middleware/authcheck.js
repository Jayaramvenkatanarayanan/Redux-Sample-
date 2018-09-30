var {EmployeeTable} = require('./../models/employee');

var Authcheck = (req,res,next) =>{
var token =  req.header('x-auth');
  EmployeeTable.findByToken(token).then((employee)=>{
 if(!employee)
 {
 return  Promise.reject();
 }
 req.user= employee;
 req.token = token;
 next();
  }).catch((e)=>{
  res.status(401).send({'message':' jwt token missing / expried ','status':false});
  });


};

module.exports={
Authcheck
};