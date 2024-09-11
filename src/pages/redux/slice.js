import { createSlice } from "@reduxjs/toolkit";
const initialState={
    loading:false,
    type:"",
    error:"",
    data:[],
}
const slice=createSlice({
    name:"slice",
    initialState,
    reducers:{
        login(state,action){
            state.loading=true;
            
        },
        loginSuccess(state,action){
            state.loading=false;
            state.type=action.payload
            
        },
        loginError(state,action){
            state.loading=false;
            
        },
        addJob(state,action){
            console.log(action.payload);
            
            state.data.push(action.payload)
            console.log(state.data);
            
        },
        // addJobSuccess(state,action){
        //   state.data.push(action.payload)
        // },
        // addJobError(state,action){
        
        // }


    }
})
export const {actions,reducer}=slice
export default reducer