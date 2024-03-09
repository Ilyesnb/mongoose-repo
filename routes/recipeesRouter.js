const express = require("express");
const recController = require ("../controllers/recipeesControllers.js")
const router = express.Router();
//get all recipes
router.get("/recipees",recController.getRecipees);
//add a new recipee
router.post("/recipees/create",recController.addRecipees)
//update the information of a specific recipee
router.put("/recipees/:id",recController.updateRecipees );
//delete  a recipee from the database
router.delete("/recipees/:id", recController.deleteRec);
module.exports = router;
