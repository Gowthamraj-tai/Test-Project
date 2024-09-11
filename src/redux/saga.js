import { all } from "redux-saga/effects"
import saga1 from "../pages/redux/saga"

export default function* saga(){
    yield all([
       ...saga1,

    ])
}