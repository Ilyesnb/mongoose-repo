const mongoose = require("mongoose")
const krustyKrab = mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    employee_id:{
        type:String,
        required : true,
    },
    position :{
        type:String,
        required : true,
    },
    salary : {
        type:Number,
        required : true,
    },
})
const Krab = mongoose.model("employee", krustyKrab) 
module.exports = Krab