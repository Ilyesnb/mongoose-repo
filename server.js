const express = require("express")
const app  = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const krusty = require("./routes/krabRouter.js")
const recipeRoute = require("./routes/recipeesRouter")
app.use(bodyParser.json())
// Connect to the database using Mongoose
const uri = "mongodb+srv://ilyesnabi9:Ilyesou2024@cluster0.nyufwoa.mongodb.net/krusty-krabs?retryWrites=true&w=majority&appName=Cluster0"
mongoose
.connect(uri)
.then(()=>{
    console.log('MongoDB Connected')
    app.listen(3001,()=>{
        console.log("server is running");
    })
})
.catch((err)=>{
    console.error('MongoDB Connection Error:', err);
})
// Define routes for API
app.use(krusty)
app.use(recipeRoute)