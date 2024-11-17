const {Schema,model} = require("mongoose");


const BasicDetailsSchema = new Schema({
    first_name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
      },
      middle_name:{
        type:String,
        minlength:2,
        maxlength:50
      },
      last_name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
      },
      role:{
        type:String,
        enum:["student","teacher","admin"],
        required:true
      },
      id_number:{
        type:String,
        unique:true,
      },
      data_of_birth:{
        type:Date,
        required:true
      },
      gander:{
        type:String,
        enum:["Male","Female","Others"],
        required:true
      },
      blood_group:{
        type:String,
        required:true
      },
      image:{
        type:String,
        // required:true
      },
      phone_number:{
        type:String,
        required:true
      },
      email_address:{
        type:String,
        required:true,
        unique:true
      },
      alternate_phone_number:{
        type:String,
      }
});

const AddressSchema = new Schema({
    home_address:{
        type:String,
        required:true
      },
      city:{
        type:String,
        required:true
      },
      state:{
        type:String,
        required:true
      },
      pin_code:{
        type:String,
      },
      country:{
        type:String,
        required:true
      }
});
 
const GuardianDetailsSchema = new Schema({
    father_name:{
        type:String
      },
      mother_name:{
        type:String
      },
      guardian_name:{
        type:String
      },
      father_occupation:{
        type:String
      },
      mother_occupation:{
        type:String
      },
      parent_number:{
        type:String
      }
});

StudyDetailsSchema = new Schema({
    previous_school:{
        type:String
      },
      class_for_addmission:{
        type:String
      },
      stream:{
        type:String
      },
      subjects:[{
        type:String
      }]
});

TeacherAcademicSchema = new Schema({
    highest_qualification:{
        type:String
    },
    subject_expertise:[{
        type:String
    }],
    university:{
        type:String
    },
    year_of_graduation:{
        type:String
    }
});

const JobDetailsSchema = new Schema({
    total_experience:{
        type:String
    },
    previous_school_organization:{
        type:String
    },
    subject_taught:[
        {
            type:String
        }
    ],
    reason_for_leaving:{
        type:String
    },

    applying_for:{
        type:String
    },
    preferred_class_to_study:[{
        type:String
      }],
      join_date:{
        type:Date,
        default:Date.now()
      }
});

const LoginSchema = new Schema({
    user_email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true

      }
});

const UserSchema = new Schema({
    basic_details:{type:BasicDetailsSchema},
    address_details:{type:AddressSchema},
    guardian_details:{type:GuardianDetailsSchema},
    study_details:{type:StudyDetailsSchema},
    teacher_academic_details:{type:TeacherAcademicSchema},
    teacher_job_details:{type:JobDetailsSchema},
    login_details:{type:LoginSchema},

});

const UserModel = model('users',UserSchema);
module.exports = UserModel;