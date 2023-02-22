import React from "react";
import PlayBtn from "../Main/Playlist/PlaylistMusic/InteractiveMenu/PlayBtn";
import {compose} from "redux";
import {connect} from "react-redux";





function HeaderMenu({playlists, classes}){
    return(
        <div className={`flex items-center text-white transition duration-300 ${classes}`}>
            <PlayBtn classes={'w-12 h-12 mr-[8px]'}/>
            <div className={'text-2xl font-bold'}>
                {
                    playlists ? playlists.name : "Name"
                }
            </div>
        </div>
    )
}


let mapStateToProps = (state)=>{
    return{
        playlists: state.homePagePlaylists.currentPlaylist
    }
}

export default compose (connect(mapStateToProps, {}))(HeaderMenu);