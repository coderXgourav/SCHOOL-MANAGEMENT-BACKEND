const {Router} = require('express');
const classRouter = Router();
const {addClass} = require("../controllers/class");


classRouter.get('/view-classes',(req,res)=>{
  return res.send("working");
});

classRouter.post('/add-class',addClass);


module.exports = classRouter;