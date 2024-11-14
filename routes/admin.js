const {Router} = require("express");
const adminRouter = Router();
const {login} = require('../controllers/admin');

adminRouter.post("/login",login);

module.exports = adminRouter;