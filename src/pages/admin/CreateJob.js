import React, { useState } from 'react'
import { Navigate } from './admin'
import './CreateJob.css'
import Input from '../../components/input'
import Select from '../../components/select'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/slice'
const CreateJob = () => {
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({
        jobId:'',
        companyName:"",
        jobTitle:"",
        jobRole:'',
        jobLocation:"",
        package:"",
        skills:"",
        genderPreference:"",
        qualification:"",
        streamsBranches:"",
        yearOfPassing:"",
        backlogAllowed:"",
        SSLCMinPercentage:"",
        PUCDiplomaMinPercentage:"",
        GraduateMinPercentage:"",
        GapInEducation:"",
        NoOfPositions:"",
        InterviewRounds:"",
        ModeOfInterview:"",
        ServiceAgreement:"",
        Deposit:"",
        Relocation:"",
        CertificateSubmission:"",
        Shifts:"",
        BlockingPeriod:"",
        FirstRoundDate:"",
        ExpiresIn:"",
        MinEmployabilityScore:"",
        InterviewType:"",
        UploadJD:""
    }) 
    const [errors,setErrors]=useState({
        jobId:'',
        companyName:"",
        jobTitle:"",
        jobRole:'',
        jobLocation:"",
        package:"",
        skills:"",
        genderPreference:"",
        qualification:"",
        streamsBranches:"",
        yearOfPassing:"",
        backlogAllowed:"",
        SSLCMinPercentage:"",
        PUCDiplomaMinPercentage:"",
        GraduateMinPercentage:"",
        GapInEducation:"",
        NoOfPositions:"",
        InterviewRounds:"",
        ModeOfInterview:"",
        ServiceAgreement:"",
        Deposit:"",
        Relocation:"",
        CertificateSubmission:"",
        Shifts:"",
        BlockingPeriod:"",
        FirstRoundDate:"",
        ExpiresIn:"",
        MinEmployabilityScore:"",
        InterviewType:"",
        UploadJD:""
    })


    const handleChange=(e)=>{
        const {name,value}=e.target
       
        setFormData({
            ...formData,
            [name]:value
     })
     validate(name,value)
    }
  
      const validate=(name,value)=>{
        let errors='';
        switch(name){
        case "jobId":{
            if(!/^[0-9]+$/.test(value.trim())){
                errors="Enter the valid job Id"
           }
           break;
        }
        case "companyName":{
          if(!(value)){
               errors=`Select a ${name}`
          }
          break;
        }
        case "jobTitle":{
            if(!(value)){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "jobRole":{
            if(!(value.trim())){
                 errors=`Select a ${name}`
            }
            break;
          }
        case "jobLocation":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
        //   case "package":{
        //     if(!(value)){
        //          errors=`Select a ${name}`
        //     }
        //     break;
        //   }
          case "skills":{
            // ..............
            if(!value.trim() && typeof value==="string"){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "genderPreference":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "qualification":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "streamsBranches":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "yearOfPassing":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "backlogAllowed":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "SSLCMinPercentage":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "PUCDiplomaMinPercentage":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "GraduateMinPercentage":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "GapInEducation":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "NoOfPositions":{
            if(!/^[0-9]+$/.test(value)){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "InterviewRounds":{
            if(!/^[0-9]+$/.test(value)){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "ServiceAgreement":{
            if(!value.trim() && typeof value==="string"){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "ModeOfInterview":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "Deposit":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "Relocation":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "CertificateSubmission":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "Shifts":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "BlockingPeriod":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "MinEmployabilityScore":{
            if(!value.trim() && typeof value==="string"){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "InterviewType":{
            if(!value){
                 errors=`Select a ${name}`
            }
            break;
          }
          case "UploadJD":{
            if(!value.trim() && typeof value==="string"){
                 errors=`Select a ${name}`
            }
            break;
          }


          case "FirstRoundDate":{
           
            if(value<new Date().toISOString().split('T')[0])
              errors="Enter the valid Date"
          break;
        }
        case "ExpiresIn":{
           
            if(value<new Date().toISOString().split('T')[0])
              errors="Enter the valid Date"
          break;
        }
      
        default :{
          break;
        }
        }
        setErrors((prev)=>({
          ...prev,
          [name]:errors
  
        }))
       
         return errors?true:false

      }
     


const handleSubmit=()=>{
    if(Object.entries(formData).map(([name,value])=>validate(name,value)).every(item=>(item===false)))
        dispatch(actions.addJob(formData))

      setFormData({
        jobId:'',
        companyName:"",
        jobTitle:"",
        jobRole:'',
        jobLocation:"",
        package:"",
        skills:"",
        genderPreference:"",
        qualification:"",
        streamsBranches:"",
        yearOfPassing:"",
        backlogAllowed:"",
        SSLCMinPercentage:"",
        PUCDiplomaMinPercentage:"",
        GraduateMinPercentage:"",
        GapInEducation:"",
        NoOfPositions:"",
        InterviewRounds:"",
        ModeOfInterview:"",
        ServiceAgreement:"",
        Deposit:"",
        Relocation:"",
        CertificateSubmission:"",
        Shifts:"",
        BlockingPeriod:"",
        FirstRoundDate:"",
        ExpiresIn:"",
        MinEmployabilityScore:"",
        InterviewType:"",
        UploadJD:""
    }) 
}
  return (
    <div className='createJob'>
        {/* <Navigate/> */}
        <h2>Create Job Profile</h2>
        <h4>Company details</h4>
        <div className='part'>
           
        <Input
        label='Job Id'
        name='jobId'
        value={formData.jobId}
        onChange={handleChange}
        error={errors.jobId?errors.jobId:""}
        />
        <Select
        label='Company Name'
        name='companyName'
        value={formData.companyName}
        onChange={handleChange}
        placeholder='Company Name'
        option={['company1','company1','company1','company1']}
        error={errors.companyName?errors.companyName:""}
        />
        </div>
        <h4>Job details</h4>
        <div className='part'>
       
        <Select
        label='Job Title'
        name='jobTitle'
        value={formData.jobTitle}
        onChange={handleChange}
        placeholder='Job Title'
        option={['FrontEnd','Backend']}
        error={errors.jobTitle?errors.jobTitle:""}
        />
        <Input
        label='Job Role'
        name='jobRole'
        value={formData.jobRole}
        onChange={handleChange}
        placeholder='Job Role'
        error={errors.jobRole?errors.jobRole:""}
        />
        <Select
        label='Job Location'
        name='jobLocation'
        value={formData.jobLocation}
        onChange={handleChange}
        placeholder='Job Location'
        multiple={false}
        option={["chennai","bangalore"]}
        error={errors.jobLocation?errors.jobLocation:""}
        />
         <Select
        label='Package (CTC)'
        name='package '
        value={formData.package}
        onChange={handleChange}
        placeholder='Package (CTC)'
       option={[200000,300000,400000,500000]}
        error={errors.package?errors.package:""}
        />
         <Input
        label='Skills'
        name='skills'
        value={formData.skills}
        onChange={handleChange}
        placeholder='Skills'
        error={errors.skills?errors.skills:""}
        />
</div>
<h4>Job Criteria details</h4>
      <div className='part'>
      <Select
        label='Gender Preference'
        name='genderPreference'
        value={formData.genderPreference}
        onChange={handleChange}
        placeholder='Gender Preference'
        option={["male","Female,Others"]}
        error={errors.genderPreference?errors.genderPreference:""}
        />
         <Select
        label='Qualificationob'
        name='qualification'
        value={formData.qualification}
        onChange={handleChange}
        placeholder='Qualification'
        option={["B.tech","M.tech"]}
        error={errors.qualification?errors.qualification:""}
        />
         <Select
        label='Streams / Branches'
        name='streamsBranches'
        value={formData.streamsBranches}
        onChange={handleChange}
        placeholder='Streams / Branches'
        option={['CSE',"IT","ECE"]}
        error={errors.streamsBranches?errors.streamsBranches:""}
        />
       
         <Select
        label='Year of Passing'
        name='yearOfPassing'
        value={formData.yearOfPassing}
        onChange={handleChange}
        placeholder='Year of Passing'
        option={[2024,2023,2022,2021]}
        error={errors.yearOfPassing?errors.yearOfPassing:""}
        />
         <Select
        label='Backlog Allowed'
        name='backlogAllowed'
        value={formData.backlogAllowed}
        onChange={handleChange}
        placeholder='Backlog Allowed'
        option={["Yes","No"]}
        error={errors.backlogAllowed?errors.backlogAllowed:""}
        />
         <Select
        label='SSLC Min Percentage'
        name='SSLCMinPercentage'
        value={formData.SSLCMinPercentage}
        onChange={handleChange}
        placeholder='SSLC Min Percentage'
        option={[34,56,78,99]}
        error={errors.SSLCMinPercentage?errors.SSLCMinPercentage:""}
        />
            <Select
        label='PUC/Diploma Min Percentage'
        name='PUCDiplomaMinPercentage'
        value={formData.PUCDiplomaMinPercentage}
        onChange={handleChange}
        placeholder='PUC/Diploma Min Percentage'
        option={[34,56,78,99]}
        error={errors.PUCDiplomaMinPercentage?errors.PUCDiplomaMinPercentage:""}
        />
            <Select
        label='Graduate Min Percentage'
        name='GraduateMinPercentage'
        value={formData.GraduateMinPercentage}
        onChange={handleChange}
        placeholder='Graduate Min Percentage'
        option={[34,56,78,99]}
        error={errors.GraduateMinPercentage?errors.GraduateMinPercentage:""}
        />
            <Select
        label='Gap In Education'
        name='GapInEducation'
        value={formData.GapInEducation}
        onChange={handleChange}
        placeholder='Gap In Education'
        option={["Yes","No"]}
        error={errors.GapInEducation?errors.GapInEducation:""}
        />
            <Input
        label='No Of Positions'
        name='NoOfPositions'
        value={formData.NoOfPositions}
        onChange={handleChange}
        placeholder='No Of Positions'
        error={errors.NoOfPositions?errors.NoOfPositions:""}
        />

      </div>

      <h4>Interview Details</h4>
      <div className='part'>
      <Input
        label='Interview Rounds'
        name='InterviewRounds'
        value={formData.InterviewRounds}
        onChange={handleChange}
        placeholder='Interview Rounds'
       
        error={errors.InterviewRounds?errors.InterviewRounds:""}
        />
         <Select
        label='Mode Of Interview'
        name='ModeOfInterview'
        value={formData.ModeOfInterview}
        onChange={handleChange}
        placeholder='Mode Of Interview'
        option={["Online","Offline"]}
        error={errors.ModeOfInterview?errors.ModeOfInterview:""}
        />
         <Input
        label='Service Agreement'
        name='ServiceAgreement'
        value={formData.ServiceAgreement}
        onChange={handleChange}
        placeholder='Service Agreement'
       
        error={errors.ServiceAgreement?errors.ServiceAgreement:""}
        />
         <Select
        label='Deposit'
        name='Deposit'
        value={formData.Deposit}
        onChange={handleChange}
        placeholder='Deposit'
        option={["Yes","No"]}
        error={errors.Deposit?errors.Deposit:""}
        />
         <Select
        label='Relocation'
        name='Relocation'
        value={formData.Relocation}
        onChange={handleChange}
        placeholder='Relocation'
        option={["Yes","No"]}
        error={errors.Relocation?errors.Relocation:""}
        />
         <Select
        label='Certificate Submission'
        name='CertificateSubmission'
        value={formData.CertificateSubmission}
        onChange={handleChange}
        placeholder='Certificate Submission'
        option={["Yes","No"]}
        error={errors.CertificateSubmission?errors.CertificateSubmission:""}
        />
         <Select
        label='Shifts'
        name='Shifts'
        value={formData.Shifts}
        onChange={handleChange}
        placeholder='Shifts'
        option={["Morning","Night"]}
        error={errors.Shifts?errors.Shifts:""}
        />
            <Select
        label='Blocking Period'
        name='BlockingPeriod'
        value={formData.BlockingPeriod}
        onChange={handleChange}
        placeholder='Blocki"ng Period'
        option={["1Month", "2Month"]}
        error={errors.BlockingPeriod?errors.BlockingPeriod:""}
        />
            <Input
        label='First round date'
        name='FirstRoundDate'
        type='date'
        value={formData.FirstRoundDate}
        onChange={handleChange}
        placeholder='First round date'
      
        error={errors.FirstRoundDate?errors.FirstRoundDate:""}
        />
            <Input
        label='ExpiresIn'
        name='ExpiresIn'
        type='datetime-local'
        value={formData.ExpiresIn}
        onChange={handleChange}
       
        
        error={errors.ExpiresIn?errors.ExpiresIn:""}
        />

  
      </div>
      <h4>Others</h4>
      <div className='part'>
    <Input
        label='Min Employability Score'
        name='MinEmployabilityScore'
        value={formData.MinEmployabilityScore}
        onChange={handleChange}
        placeholder='Min Employability Score'
       
        
        error={errors.MinEmployabilityScore?errors.MinEmployabilityScore:""}
        />
            <Select
        label='Interview Type'
        name='InterviewType'
        value={formData.InterviewType}
        onChange={handleChange}
        placeholder='InterviewType'
        option={["TC","NTC"]}
        
        error={errors.InterviewType?errors.InterviewType:""}
        />
            <Input
        label='Upload JD'
        name='UploadJD'
        value={formData.UploadJD}
        onChange={handleChange}
        placeholder='Upload Job Description'
       
        
        error={errors.UploadJD?errors.UploadJD:""}
        />  

    </div>
    <span className='buttons'>
      <button className='button-cancel'>Cancel</button>
      <button className='button-submit'onClick={handleSubmit}>Submit</button>
      </span>
        </div>
  )
}

export default CreateJob