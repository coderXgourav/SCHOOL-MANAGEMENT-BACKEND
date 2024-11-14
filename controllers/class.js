const classModel = require('../models/class');
const getClasses = async(req,res) =>{

}
const addClass = async(req,res)=>{
    const {className,sections} = req.body;
    // console.log(req.body);
    // return;
    if(!className || sections.length<1){ 
        return res.status(400).json({status:false,message:"Please Fill the class form details!"});
    }else{
        try{
            const checkClassExist =  await classModel.findOne({class_name:className});
            if(checkClassExist){
                return res.status(400).json({status:false,message:"Class name already exist"});
            }else{
                const classData = new classModel({
                    class_name:className,
                    sections:sections,
                });
                await classData.save();
                return res.status(200).json({status:true,message:"Class Created Successful"});
            }
        }catch(error){
           return res.status(500).json({status:false,message:"Internal Error!"});
        }
    }

}

module.exports ={addClass}