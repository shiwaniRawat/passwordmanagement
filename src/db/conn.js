//connect db with express
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/registration",{
    // to avoid DeprecationWarning
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection sucess`);
}).catch((e)=>{
    console.log(`server not sucess`)
})