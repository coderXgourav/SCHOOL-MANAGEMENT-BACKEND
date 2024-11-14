const dotenv = require("dotenv");
const check = dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");

const DB_CONNECTION = require("./config/conn");
const classRouter = require("./routes/class");
const adminRouter = require("./routes/admin");
const userRoute = require("./routes/user");

DB_CONNECTION();

app.use(cors());
app.use(express.json());
app.use('/api/class',classRouter);
app.use('/api/admin',adminRouter);
app.use('/api/user',userRoute);




app.listen(5000,()=>{
  console.log(`Server Running on PORT 5000`);
});
