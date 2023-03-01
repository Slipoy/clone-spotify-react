import {combineReducers, createStore} from "redux";
import authorization from "./authorization";
import homePagePlaylists from "./basePlaylist";
import CurrentSection from "./CurrentSection";
import PlayingTrack from "./PlayingTrack";


let reducer = combineReducers({
    authorization,
    homePagePlaylists,
    CurrentSection,
    PlayingTrack

})


let store = createStore(reducer)



export default store