import { configureStore } from "@reduxjs/toolkit";
import createSaga from 'redux-saga'
import saga from "./saga";
import reducers from "./reducer";
const sagaMiddleware=createSaga();
export const store=configureStore({
    reducer:reducers,
    middleware:(d)=>d( ).concat(sagaMiddleware)
})
sagaMiddleware.run(saga)