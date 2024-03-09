const mongoose = require( 'mongoose' );
const Rschema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    ingredients: {
        type: [String], // Array of strings
        required: true
    },
})
const recipees = mongoose.model("recipee",Rschema)
module.exports = recipees