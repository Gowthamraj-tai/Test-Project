import React from 'react'
import { Navigate } from './admin'
import { useSelector } from 'react-redux'
const ListJob = () => {
    const {loading,message,data}=useSelector((state)=>state.data)
    if(message)
        console.log(message)
    if(data)
        console.log(data)
  return (
    <div>
        <table border={1}>
            <thead>
            {/* {data&&(
            <div>
                {Object.keys(data[0]).map(data=><td>{data}</td>)}
            </div>
            )
            } */}
            </thead>
            <tbody>
                {data?.map((item)=>
                <div>
                    {Object.values(item).map(data=><td>{data}</td>)}
                </div>
                )}
            </tbody>
       </table>
    </div>
  )
}

export default ListJob