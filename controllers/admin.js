const AdminModel = require("../models/admin");
const jwt = require('jsonwebtoken');


const login = async(req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ status: false, title: "Fill Login Details",desc:"Please Fill Username & Password" });
  } else {
    try{
      const usernameExist =  await AdminModel.findOne({$or:[
        {email:username},
        {username:username}
      ]});
      if(usernameExist){
        const checkPassword = usernameExist.password==password;
        if(checkPassword){
           usernameExist.password="***********";
           usernameExist.username="**********************";
        const genToken = await jwt.sign({usernameExist},process.env.SECRET_KEY,(error,token)=>{
          return res.status(200).json({status:true,title:"Success",desc:"Login Successfull",token});
          });
        }else{
          res.status(400).json({status:false,title:"Check Password",desc:"Incorrect Password!"});
        }
      }else{
        res.status(400).json({status:false,title:"Invalid Email, Username",desc:"Incorrect Username or email!"});
      }
    }catch(error){
      res.status(500).json({status:false,desc:error.message,title:"Technical Issue!"})
    }


  }
};
const verifyToken = async(req,res) => {
  let token = req.headers.authorization;
  token = token.split(" ")[1];
  const checkToken = jwt.verify(token,process.env.SECRET_KEY,(error,decode)=>{
   if(error){
    return res.status(400).json({status:false,title:"Token not matched",desc:"Sorry! your token not matched"});
   }else{
    return res.status(200).json({status:true});
   }
  });


}

module.exports = { login,verifyToken };
