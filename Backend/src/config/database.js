
const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://divyanshu983770_db_user:Zj8GwEryJbT3unza@cluster0.absepul.mongodb.net/millet")
}
module.exports = connectDB;