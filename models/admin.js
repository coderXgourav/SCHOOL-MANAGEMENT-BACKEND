const {Schema,model} = require('mongoose');

const adminSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const AdminModel = model("admin",adminSchema);

module.exports = AdminModel;

