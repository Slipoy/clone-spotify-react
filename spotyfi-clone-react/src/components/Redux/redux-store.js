import {combineReducers, createStore} from "redux";
import authorization from "./authorization";
import homePagePlaylists from "./basePlaylist";


let reducer = combineReducers({
    authorization,
    homePagePlaylists

})


let store = createStore(reducer)



export default store