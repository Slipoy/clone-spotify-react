import {combineReducers, createStore} from "redux";
import authorization from "./authorization";
import homePagePlaylists from "./basePlaylist";
import CurrentSection from "./CurrentSection";


let reducer = combineReducers({
    authorization,
    homePagePlaylists,
    CurrentSection

})


let store = createStore(reducer)



export default store