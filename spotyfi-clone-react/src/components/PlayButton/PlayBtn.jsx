import React, {useState, useRef,useEffect} from "react";
import {PlayIcon,PauseIcon} from "@heroicons/react/24/solid";
import {connect} from "react-redux";
import {changeStatusToPause, changeStatusToPlay,addDataTracks} from "../Redux/PlayingTrack";




function PlayBtn({isPlaying, handleClick,playingStatus,dataTracks,changeStatusToPlay,changeStatusToPause,addDataTracks,playlists,id,setIsPlaying}){

    return(
        <div onClick={(e)=>{
            e.stopPropagation()
        }}>
            {
                playingStatus && isPlaying ? <PauseIcon onClick={()=>{
                    setIsPlaying(false);
                    changeStatusToPause()
                }}/> :<PlayIcon onClick={()=>{
                    setIsPlaying(true);
                    addDataTracks(playlists.tracks, id);
                    changeStatusToPlay()
                }}/>
            }

        </div>
    )

}

let mapStateToProps = (state)=>{
    return{
        currentTrack: state.PlayingTrack.currentTrack,
        playingStatus: state.PlayingTrack.statusPlayBtn,
        playlists: state.homePagePlaylists.currentPlaylist,

    }
}

export default connect(mapStateToProps, {changeStatusToPlay,changeStatusToPause,addDataTracks})(PlayBtn);