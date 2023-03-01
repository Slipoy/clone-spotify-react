import React from "react";
import Music from "../Music/Music";
import {compose} from "redux";
import {connect} from "react-redux";
import {deletePlaylist, setCurrentPlaylist} from "../../../../Redux/basePlaylist";
import {withRouter} from "../../../../../hooks/withRouter";
import TitleMusicData from "../../../../TitleMusicData/TitleMusicData";
import {useRef, useState} from "react";
import useEvent from "../../../../../hooks/useEvent";



function MusicData({playlists, showToast, showPopover,toggleScrolling,headerRef,contentWrapperRef}){


    return(
        <div className='relative flex flex-col w-full text-[#B3B3B3] text-[12px] font-medium tracking-widest' >
            <TitleMusicData contentWrapperRef={contentWrapperRef} headerRef={headerRef}/>
            {
                playlists.tracks && playlists.tracks.map((track, index)=> <Music showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling} id={index} key={index} track={track.track}/>)
            }
        </div>
    )

}



let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token,
        playlists: state.homePagePlaylists.currentPlaylist
    }
}

export default compose (connect(mapStateToProps, {setCurrentPlaylist,deletePlaylist}),withRouter)(MusicData);