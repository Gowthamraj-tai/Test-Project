import React from 'react'

const Input = ({label="",type='text',value,name='',placeholder='',onChange,error=''}) => {
  return (
    <div className='input'>
        <label>{label}</label>
        <br/>
        <input className='inputInput' 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ></input>
        <br/>
        <span className={error?'error':''}>{error}</span>
    </div>
  )
}

export default Input