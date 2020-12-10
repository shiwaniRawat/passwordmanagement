const mongoose=require("mongoose");

const compregister= new mongoose.Schema({
    userId :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

//create collection
const Register=new mongoose.model("Register",compregister);
module.exports=Register;