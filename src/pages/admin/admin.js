
import React from 'react'

import {Link,Route,Routes, useNavigate,useLocation} from 'react-router-dom'
import ListJob from './ListJob';
import CreateJob from './CreateJob';
 export const Navigate=()=>{
    const navigate=useNavigate();
    return(
        <div>
            <button onClick={()=>navigate('/user/list')}>ListJog</button>
            <button onClick={()=>navigate('/create')}>createJob</button>
           
        </div>
    )
}
const Admin = () => {
    const location=useLocation();
    
  return (
    <div>
       
        {/* <Navigate/> */}

        {location.pathname === '/admin' &&(
             <nav>
             <Link to="create"><button>createList</button></Link>
             
           </nav>
        )}
        <div>
        <Routes>
            <Route path='/' element={<ListJob/>}/>
            {/* <Route path='list' element={<ListJob/>}/> */}
            <Route path='create' element={<CreateJob/>}/>
        </Routes>
        </div>
    </div>
  )
}

export default Admin