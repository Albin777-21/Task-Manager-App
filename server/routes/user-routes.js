const express=require('express')
const userRouter=express.Router()


const {registerUser,loginUser,logout}=require('../controllers/user-control')
const{userVerification}=require('../middleware/auth-middleware')

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/auth',userVerification)
userRouter.post('/logout',logout)


module.exports=userRouter;