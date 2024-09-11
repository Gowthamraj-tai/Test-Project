import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

// const logs=[
//     {email:'admim@gmail.com',password:'a1234'}
// ]
function* login(action){
    try{
        const {email,password}=action.payload
        // logs.some((item)=>item.password===password &&item.email===email)
        let type;
        if(password.includes('user')){
            type='user'
        }
        else if(password.includes('admin')){
            type='admin'
        }
        else
        type='not'

        yield put({type:actions.loginSuccess.type,payload:type})
    }
    catch(error){
        yield put({type:actions.loginError.type,payload:error})
    }

}
const saga=[
  takeLatest(actions.login.type,login)
]
export default saga