import React, {  useState } from 'react'

const App = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[errors,setErrors]=useState({
    email:"",
    password:""
  })


const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;


  function handleSubmit(){

    if(email.trim()===""){
      setErrors((errors)=>({...errors,email:"please enter email address"}))
    }
    else if(!emailPattern.test(email)){
      setErrors((errors)=>({...errors,email:"please enter valid email address"}))
    }else{
  setErrors((errors)=>({...errors,email:""}))
}


if(password.trim()===""){
  setErrors((errors)=>({...errors,password:"please enter password"}))
}
else if(password.trim().length<=8 ){
  setErrors((errors)=>({...errors,password:"password is minimum 8 characters "}))
} 
else{
setErrors((errors)=>({...errors,password:""}))
}
  }

  return (
    <div className='border w-25 mt-5 m-auto p-3'>
    <h2 className='text-primary text-center'>Form Validation</h2>
    <div className='mt-3'>
      <lable>Email</lable>
      <input type='email' className='form-control' value={email} onChange={((e)=>{
        setEmail(e.target.value)
      })}/>
      {errors.email&&<span className='text-danger'>{errors.email}</span>}
    </div>
    <div className='mt-3'>
      <lable>Password</lable>
      <input type='password' className='form-control' value={password} onChange={((e)=>{
        setPassword(e.target.value)
      })}/>
      {errors.password&&<span className='text-danger'>{errors.password}</span>}
    </div>
    <div>
      <button className='btn btn-primary w-100 mt-3 ' onClick={handleSubmit}>Login</button>
    </div>
    <div className='mt-3'>
      <lable>Reset Password</lable>
    </div>
    <div className='mt-3'>
      <lable>Delete account</lable>
    </div>
    </div>

  )
}

export default App