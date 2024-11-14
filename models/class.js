const mongoose = require("mongoose");
// const { v4: uuidv4 } = require('uuid');

const classSchema = new mongoose.Schema({
    class_name:{
        type:String,
        required:true
    },
    sections:[{
       
        sectionName:{
        type:String,
        required:true
    }
}]
},{
    timestamps:true
});

const classModel = mongoose.model("class",classSchema);

module.exports = classModel;

