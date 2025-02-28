import CommonForm from '@/components/common-form'
import { signInFormControls } from '@/config'
import { callLoginUserApi } from '@/services'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
  const formData=useForm({
    defaultValues:{
      email:'',
      password:'',
    }
  })

  const navigate=useNavigate()

 async function handleSubmit(getData){
    console.log(getData);
    const data=await callLoginUserApi(getData)

    console.log(data);
    if(data.success){
      navigate('/tasks/list')


    }
    

    

  }
  return (
    <div>
        <CommonForm
        btnText={'Sign In'}
        handleSubmit={handleSubmit}
        formControls={signInFormControls}
        form={formData}
        
        />
      
    </div>
  )
}

export default SignInPage
