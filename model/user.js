const mongoose = require('mongoose');
 // creating schema
 const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    password:String,
});
const User = mongoose.model('User',userSchema);

module.exports=User;