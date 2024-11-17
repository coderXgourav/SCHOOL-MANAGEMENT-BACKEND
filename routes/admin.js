const {Router} = require("express");
const adminRouter = Router();
const {login,verifyToken} = require('../controllers/admin');

adminRouter.post("/login",login);
adminRouter.post("/login-verify",verifyToken);


module.exports = adminRouter;