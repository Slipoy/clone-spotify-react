import {combineReducers, createStore} from "redux";
import authorization from "./authorization";


let reducer = combineReducers({
    authorization,

})


let store = createStore(reducer)



export default store