//get all recipees
const getRecipees = (req, res) => {
    recipees
      .find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log({ err: "Error in getting data" });
      });
  }
  //add a new recipee
  const addRecipees = (req,res)=>{
    const addRecipees = new recipees(req.body)
    addRecipees
    .save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log({err:"cannot add"})
    })
}
//update  the recipee by id
const updateRecipees= (req, res) => {
    const id = req.params.id;
    const updateRecipee = req.body;
    recipees
      .findByIdAndUpdate(id, updateRecipee, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log({ err: "can not update the recipee" }));
  }
//delete  the recipee by its id
  const deleteRec = (req, res) => {
    const id = req.params.id;
    recipees
      .findByIdAndDelete(id)
      .then((resualt) => {
        console.log(resualt);
      })
      .catch((err) => console.log({ err: "can not delete the recipee" }));
  }
//exports  all functions to be used in server.js file
  module.exports = {
    updateRecipees,
    deleteRec,
    getRecipees,
    addRecipees,
  }