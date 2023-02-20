const User  = require("../model/userModel")
const bcrypt = require("bcrypt")


module.exports.register = async(req,res,next)=>{
try{
    const {name,email,password} =req.body;
    const namecheck =  await  User.findOne({ name });

    if(namecheck)
       return res.json({msg:"name already used",status:false}) 
       const emailCheck = await User.findOne({ email });
       if(emailCheck)
       return res.json({msg:"Email already used ", status:false})
       
       const hashedPassword = await bcrypt.hash(password,10)
       const user = await User.create({
           email,name,password:hashedPassword,
       })
       delete user.password;
       return res.json({statu:true,user})
    
}catch(error){
    console.log(error.message)
}

}

module.exports.login = async(req,res,next)=>{
    try{
        const {email,password} =req.body;
        const Email =  await  User.findOne({ email });
        if(!Email)
           return res.json({msg:"Incorrect email or password",status:false}) 
          const isPasswordvalid = await bcrypt.compare(password,Email.password)
           if(!isPasswordvalid){

               return res.json({msg:"Incorrect email or password",status:false})
               delete Email.password
           }
           else{
               return res.json({status:true,Email})
           }
    }catch(error){
        console.log(error.message)
    }
    
    }