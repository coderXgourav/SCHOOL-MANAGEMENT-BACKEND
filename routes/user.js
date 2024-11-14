const {Router} = require("express");
const userRoute = Router();
const {create} = require("../controllers/user");


userRoute.post('/create',create);

module.exports = userRoute;