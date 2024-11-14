const UserModel = require('../models/user'); 
const create = async (req,res) =>{

    const {first_name,last_name,data_of_birth,gander,blood_group,phone_number,email_address,role} = req?.body?.basic_details;
    const {home_address,city,state,pin_code,country} = req?.body?.address_details;
   const {father_name,mother_name,father_occupation,mother_occupation,parent_number} = req?.body?.guardian_details;
   const {previous_school,class_for_addmission} = req?.body?.study_details;
    const {username,password,user_email} = req.body.login_details;

    if(!first_name || !last_name || !data_of_birth ||!gander||!blood_group,!phone_number||!email_address||!home_address||!city||!state||!pin_code||!country||!father_name||!mother_name||!father_occupation||!mother_occupation||!parent_number||!previous_school||!class_for_addmission||!username||!password||!user_email||!role){
        response(res,400,"Please Fill Required Fields");
    }else{
  const userDetails = {first_name,last_name,data_of_birth,gander,blood_group,phone_number,email_address,role};
  const address_details = {home_address,city,state,pin_code,country};
  const guardian_details = {father_name,mother_name,father_occupation,mother_occupation,parent_number};
  const study_details = {previous_school,class_for_addmission};
  const login_details = {username,password,user_email} ;
  const student = new UserModel({
    "basic_details":userDetails,
    "address_details":address_details,
    "guardian_details":guardian_details,
    "study_details":study_details,
    "login_details":login_details
  });
  await student.save();
  response(res,201,"Students Created");
    }

}

const response = (res,operation,message)=>{
    return res.status(operation).json({message});
}

module.exports = {create}