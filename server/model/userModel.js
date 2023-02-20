const mongoose = require('mongoose')
const  userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        max:60,
    },
      Bname:{
        type:String,
        required:true,
        min:5,
        max:30,
        unique:true,
    },

    password:{
        type:String,
       require:true,
       min:8,
       max:20,
    }
})
module.exports = mongoose.model("users",userSchema);