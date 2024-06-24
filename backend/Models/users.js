const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

const userModel = mongoose.model("users",UserSchema)

module.exports = userModell;