import React, {useEffect} from "react";
import {PlayIcon, PauseIcon} from "@heroicons/react/24/outline";
import {compose} from "redux";
import {connect} from "react-redux";
import {deletePlaylist, setCurrentPlaylist} from "../../../../Redux/basePlaylist";
import {withRouter} from "../../../../../hooks/withRouter";
import {changeStatusToPlay, changeStatusToPause} from "../../../../Redux/PlayingTrack";



function PlayBtn({classes:width,playBtnRef, handleClick,playingStatus,changeStatusToPlay,changeStatusToPause}){
    return(
        <div ref={playBtnRef} className={`${width} hover:scale-105`}>
                        <span className='flex items-center justify-center w-full h-full bg-[#1abc54] rounded-full'>
                            {
                                playingStatus ?  <PauseIcon onClick={changeStatusToPause} className='fill-black text-black w-1/2 h-1/2'/> : <PlayIcon onClick={changeStatusToPlay} className='fill-black text-black w-1/2 h-1/2'/>
                            }

                        </span>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return{
        playingStatus: state.PlayingTrack.statusPlayBtn,
    }
}

export default  connect(mapStateToProps, {changeStatusToPlay,changeStatusToPause})(PlayBtn);