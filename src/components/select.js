import React from 'react'

const Select = ({label="",value,name='',placeholder='',onChange,error='',option=null,multiple=false}) => {
  return (
    <div className='input'>
         <label>{label}</label>
        <br/>
        <select className='selectInput'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiple={multiple}

        >
            <option value=''>{placeholder}</option>
       {option.map(option=><option value={option}>{option}</option>)}
        </select>
        <br/>
        <span className={error?'error':''}>{error}</span>
    </div>
  )
}

export default Select