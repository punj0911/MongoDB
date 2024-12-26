var mongoose = require('mongoose');
const {Schema} = mongoose;
// Table schema
const userSchema = new Schema({ 
    uname:String,
    ugender:String,
    umobile:Number,
    uemail:String
})
// Schema export as model
var userModel = mongoose.model("User",userSchema);

module.exports = userModel;
