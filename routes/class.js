const {Router} = require('express');
const {verifyToken} = require("../middlewares/verifyToken");
const classRouter = Router();
const {addClass,getClass,deleteClass,getSection,getClassDetails,updateClass} = require("../controllers/class");


classRouter.get('/get-class',verifyToken, getClass);

classRouter.put('/update-class',verifyToken,updateClass);
classRouter.post('/add-class',verifyToken,addClass);
classRouter.delete('/delete/:id',verifyToken,deleteClass);
classRouter.get('/get-section/:id',verifyToken,getSection);
classRouter.get('/:id',verifyToken,getClassDetails);


module.exports = classRouter;