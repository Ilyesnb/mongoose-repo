// add controllers
const Krab = require("../model/krusty-krab")
// get all krabs
const get_employee = (req, res) => {
    Krab.find()
      .then((krab) => {
        res.json(krab);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  //add new  employee to the database
  const add_employees = (req,res)=>{
    const krabs = Krab(req.body)
    krabs
    .save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log({err:"Sorry, cannot create this new employee"});
    })
}
// upDate  an existing employee by their unique id
const upDate = (req,res)=>{
    const id =req.params.id
    const upDateEmployees = req.body;
    Krab.findByIdAndUpdate(id,upDateEmployees,{new:true})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log({err:"Error in updating the employee"});
    })
}
//delete  an employee by its id
const deleteE = (req,res)=>{
    const id  = req.params.id
    Krab.findByIdAndDelete(id)
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log({err:"can not delete data"});
    })
}
//exporting the controllers
module.exports={
    get_employee,
    add_employees,
    upDate,
    deleteE,
}