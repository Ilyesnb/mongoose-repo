const express = require("express");
const eControllers = require("../controllers/eControllers")
const router = express.Router();
//get  all employees
router.get("/krusty-krab",eControllers.get_employee );
//add  employee
router.post("/krusty-krab/create",eControllers.add_employees)
//update  employee information
router.put("/krusty-krab/:id",eControllers.upDate)
//delete  an employee by id
router.delete("/krusty-krab/:id",eControllers.deleteE)
//export  the module to be used in server.js
module.exports = router;
