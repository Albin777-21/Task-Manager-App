const jwt=require('jsonwebtoken')
const user=require('../models/user')

const userVerification=async(req,res)=>{
    const token=req.cookies.token
    if(!token){
        return res.json({
            success: false,
            message:"Token is not valid"
        })
    }else{
        try {
            const decoded=jwt.verify(token,'DEFAULT_SECRET_KEY')
            const userInfo=await user.findById(decoded.getId)

            if(userInfo) return res.status(200).json({
                success: true,
                userInfo
            })
        } catch (error) {
            return res.status(401).json({
                success: false,
                message:"User not authenticated"
            })
            
        }

    }
}
module.exports ={userVerification}