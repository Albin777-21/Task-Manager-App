import CommonForm from '@/components/common-form'
import { signUpFormControls } from '@/config'
import { useToast } from '@/components/ui/use-toast'
import { callRegisterUserApi } from '@/services'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const formData=useForm({
    defaultValues: {
      name: '',
      email:'',
      password:'',
    }
  })

const {toast}=useToast()
const navigate=useNavigate()

  async function handleSubmit(getData) {
    console.log(getData);
    const data=await callRegisterUserApi(getData)
    console.log(data,'data');

    if(data?.success){
      toast({
        title:'User registration Success',
        description:'Welcome'
      })
      navigate('/task/list')
    }else{
      toast({
        title:'Error registration',
        description:'Some Error Occured'
      })
    }
    

    

  }
  return (
    <div>
      
      <CommonForm form={formData} handleSubmit={handleSubmit}  formControls={signUpFormControls} btnText={'Submit'}/>
    </div>
  )
}

export default SignUpPage
