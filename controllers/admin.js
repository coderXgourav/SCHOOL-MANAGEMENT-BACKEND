const login = (req,res) =>{
  const {username , password} = req.body;
  if(!username || !password){
    return res.status(400).json({status:false,title:"Please Fill Username & Password"});
  }

  

}


module.exports = {login} 