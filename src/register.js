const mongoose=require("mongoose");

const compregister= new mongoose.Schema({
    // userId :{
    //     type:String,
    //     required:true
    // },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }

})

//create collection
const Com=new mongoose.model("Com",compregister);
module.exports=Com;