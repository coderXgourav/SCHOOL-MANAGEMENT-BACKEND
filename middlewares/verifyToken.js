const jwt = require("jsonwebtoken");

const verifyToken = async(req,res,next) => {
    let token = req.headers.authorization;
    if(!token){
        return res.status(400).json({status:false,title:"Token Found",desc:"Sorry! token not Found"});
    }else{
    token = token.split(" ")[1];
    const checkToken = jwt.verify(token,process.env.SECRET_KEY,(error,decode)=>{
     if(error){
      return res.status(400).json({status:false,title:"Token not matched",desc:"Sorry! your token not matched"});
     }else{
        req.token = decode;
        next();
     }
    });
}

  }

  module.exports = {verifyToken};