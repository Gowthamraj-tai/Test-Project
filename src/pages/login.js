import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom'
import { actions } from './redux/slice';

const Login = () => {
  const [data,setData]=useState({email:"",password:""})
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch=useDispatch()
    const {type}=useSelector((state)=>state.data)
    
    const handleVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
  
  
       const handleLog=(e)=>{
     
        const {name,value}=e.target
    
        setData({
          ...data,
         
          [name]:value
        })

       }
       const handleSubmit=(e)=>{
        e.preventDefault();
           dispatch(actions.login({email:data.email,password:data.password})) 
       }   

       if(type){
       if(type==='user')
        navigate("/user")
      else if(type==='admin')
        navigate("/admin")
      else{
      alert("Not a valid user")
      }  
    }
  return (
    <div >
      
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='form'>
       
        
         <label>Email </label>
         <br/>
         <input type='email'
         name="email"
         
          onChange={handleLog}
           />
          
          <br/>
           <label>password </label>
           <br/>
         <input type={showPassword ? 'text' : 'password'}
         name='password'
         value={data.password} 
         onChange={handleLog} 
         required
        />
         <span className='password' onClick={handleVisibility}>{showPassword ? 'hide' : 'show'}</span>
         
         <br/>
         <button type='submit'>login</button>
         </form>
    
    </div>
  )
}

export default Login