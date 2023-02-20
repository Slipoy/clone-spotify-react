import React from "react";
import {ClockIcon} from "@heroicons/react/24/outline";
import Music from "../Music/Music";
import {compose} from "redux";
import {connect} from "react-redux";
import {deletePlaylist, setCurrentPlaylist} from "../../../../Redux/basePlaylist";
import {withRouter} from "../../../../../hooks/withRouter";



function MusicData({playlists, showToast, showPopover,toggleScrolling}){
    return(
        <div className='flex flex-col w-full px-8 text-[#B3B3B3] text-[12px] font-medium tracking-widest' >
            <div className='sticky top-[68px] grid grid-cols-music h-[30px] px-8 mb-6 border-b border-neutral-400'>
                <div className='flex gap-5 w-1/3'>
                    <span>#</span>
                    <span className=''>НАЗВАНИЕ</span>

                </div>
                <div className=''>
                    АЛЬБОМ
                </div>
                <div className='flex justify-end'>
                    <ClockIcon className='w-5 h-5'/>
                </div>
            </div>
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