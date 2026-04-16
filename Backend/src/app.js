const express = require("express");
const connectDB = require("./config/database");

const app = express();

app.use(express.json());


connectDB()
.then(()=>{
    console.log("Database connected successfully");
    app.listen(5000,()=>{
    console.log("server is running on port 5000")
})
})
.catch((err)=>{
    console.log("Databse connection is failed")
})

