const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

//scama 
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

compregister.pre("save", async function(next){
    if (this.isModified("password")){
            
    // const passwordHash= await bcrypt.hash(password,10);
    // console.log(`the current pass is ${this.password}`);
    this.password =  await bcrypt.hash(this.password,10)
    this.confirmpassword=undefined;
    // console.log(`the current pass is ${this.password}`);

    }

    next();
})

//create collection
const Comp=new mongoose.model("Comp",compregister);
module.exports=Comp;