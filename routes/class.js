const {Router} = require('express');
const {verifyToken} = require("../middlewares/verifyToken");
const classRouter = Router();
const {addClass,getClass,deleteClass,getSection} = require("../controllers/class");


classRouter.get('/get-class',verifyToken, getClass);

classRouter.post('/add-class',verifyToken,addClass);
classRouter.delete('/delete/:id',verifyToken,deleteClass);
classRouter.get('/get-section/:id',verifyToken,getSection);


module.exports = classRouter;