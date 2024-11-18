const classModel = require('../models/class');
const getClasses = async(req,res) =>{

}
const addClass = async(req,res)=>{
    let {className,sections} = req.body;
    className = className.toUpperCase();
    let sectionData = [];
    for (let index = 0; index < sections.length; index++) {
         sectionData.push({"sectionName":sections[index]});
    }
   
    if(!className || sections.length<1){ 
        return res.status(400).json({status:false,title:"Required Section",desc:"Please Fill the class form details!"});
    }else{
        try{
            const checkClassExist =  await classModel.findOne({class_name:className});
            if(checkClassExist){
                return res.status(400).json({status:false,title:"Class Exist!",desc:"Class name already exist"});
            }else{
                const classData = new classModel({
                    class_name:className,
                    sections:sectionData
                });

                await classData.save();
                return res.status(201).json({status:true,title:"Successfull",desc:"Class Created Successful"});
            }
        }catch(error){
           return res.status(500).json({status:false,title:"Error!",desc:"Internal Error!"});
        }
    }

}

const getClass = async (req,res) =>{
    const classData = await classModel.find({});
    return res.status(200).json({classData});
} 

const deleteClass = async(req,res) =>{
    const id = req.params.id;
    try{
        const deleteClass = await classModel.findByIdAndDelete(id);
        return res.status(200).json({status:true,title:"Class Deleted",desc:"class has been deleted successfully!"});


    }catch(error){
        return res.status(500).json({status:false,title:"Internal Error",desc:"Please call developer to fix it"});
    }


}

const getSection = async(req,res) =>{
    const id = req?.params?.id;
    try{
        const data = await classModel.findById(id);
        const section = data?.sections;
        return res.status(200).send(section);
    }catch(error){
        return res.status(500).json({status:false,title:"Technical Issue",desc:error.message});
    }
}

const getClassDetails = async(req,res) =>{
    const id = req?.params?.id;
    try{
        const data = await classModel.findById(id);
        const section = data;
        return res.status(200).send(section);
    }catch(error){
        return res.status(500).json({status:false,title:"Technical Issue",desc:error.message});
    }
}

const updateClass = async(req,res) =>{
    const id = req?.body?.classId;
    let {className,sections} = req.body;

    // for(let i=0; i<sections.length; i++){
    //     console.log(sections[i].sectionName);
    //     console.log(sections[i]._id);
    // }
    // return;
    className = className.toUpperCase();
    if(!className ||sections.length<1){
        return res.status(400).json({status:false,title:"Fill Required Fields",desc:"Please Fill all the fields"});
    }
    try{ 
    let classes = await classModel.findById(id);
  if(classes){
    const checkExist = await classModel.find({'class_name':className});
    if(checkExist.length<2){
    const checkExist = await classModel.findByIdAndUpdate(id,{'class_name':className});
    return res.status(200).json({status:true,title:"Class Updated",desc:"Class Has been updated!"});

    }else{
    return res.status(400).json({status:false,title:"Class Already Exist",desc:"This class already exist in your record!"});
    }
  }else{
    return res.status(400).json({status:false,title:"Invalid Class Id",desc:"You are sent invalid class id!"});

  }
    

    console.log(classes);
          
    }catch(error){
        return res.status(500).json({status:false,title:"Techinal Issue!",desc:error.message});
    }



}



module.exports ={addClass,getClass,deleteClass,getSection,getClassDetails,updateClass}