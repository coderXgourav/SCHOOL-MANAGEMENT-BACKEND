const mongoose = require("mongoose");

const dbUrl = process.env.DATABASE_URI;

const dbConnect = () =>{
    mongoose.connect(dbUrl).then(()=>{
     console.log("DB Connected");
    }).catch(error=>{
     console.log("DB Connection Failed !");
     process.exit(1);
    });

}

module.exports = dbConnect;