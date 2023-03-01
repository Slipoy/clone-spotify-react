import React, {useEffect, useRef, useState} from "react";
import BaseButton from "../BaseButton/BaseButton";
import MainInfoTrack from "../MainInfoTrack/MainInfoTrack";
import FavoritesBtn from "../Main/Playlist/PlaylistMusic/InteractiveMenu/FavoritesBtn";
import ReactPlayer from 'react-player';
import {BackwardIcon, ForwardIcon, SpeakerWaveIcon} from "@heroicons/react/24/solid/index";
import PlayBtn from "../Main/Playlist/PlaylistMusic/InteractiveMenu/PlayBtn";
import {connect} from "react-redux";
import {
    changeStatusToPause,
    changeStatusToPlay,
    setTrack,
    addDataTracks,
    setNexTrackId,
    setTrackId
} from "../Redux/PlayingTrack";
import logo from "../Sidebar/Logo";





function Player({currentTrack,playingStatus,changeStatusToPause,changeStatusToPlay,playlists,setTrackId,currentTrackID,setTrack,addDataTracks,dataTracks,nextTrackId,setNexTrackId}){
    const audioRef = useRef();
    useEffect(() => {
        let handleCurTrack = dataTracks && dataTracks.find((track, index) => index === currentTrackID);
        handleCurTrack && setTrack(handleCurTrack);

        const audio = audioRef.current;
        audio.src = handleCurTrack && handleCurTrack.track.preview_url;
        // Remove existing event listeners
        audio.removeEventListener('timeupdate', handleTimeUpdate);

        // Add new event listeners
        if (audio && playingStatus) {

            audio.play();
            audio.addEventListener('timeupdate', handleTimeUpdate);
        } else {
            audio.pause();
        }
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [playingStatus,currentTrackID, dataTracks,currentTrackID]);
    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (audio.currentTime === audio.duration) {
            let nextTrack = currentTrackID + 1;
            addDataTracks(playlists.tracks, nextTrack);
        }
    }





    return(
            <div className="grid grid-cols-player px-5 py-3 h-[90px] bg-[#181818] border-t border-t-[#282828] flex items-center">
                <audio ref={audioRef}></audio>
                <div className={'flex items-center gap-5 text-[#B3B3B3]'}>
                    <MainInfoTrack imgClasses={'w-[56px] h-[56px]'} trackImg={currentTrack.img} artistName={currentTrack.artistName} trackName={currentTrack.trackName}/>
                    <FavoritesBtn size={'w-5 h-5'}/>
                </div>
                <div className={'flex flex-col items-center'}>
                    <div className={'flex justify-start items-center'}>
                        <BackwardIcon className={'w-5 h-5 fill-[#A7A7A7]'}/>
                        <PlayBtn classes={'w-8 h-8 mx-5'}/>
                        <ForwardIcon className={'w-5 h-5 fill-[#A7A7A7]'}/>
                    </div>
                    <div className={"flex justify-center items-center"}>
                        <span className={'text-[#A7A7A7]'}>0:00</span>
                        <div className={'w-[626px] h-1 bg-neutral-400 mx-2 rounded'}></div>
                        <span className={'text-[#A7A7A7]'}>3:21</span>
                    </div>
                </div>
                <div className={'flex items-center justify-end'}>
                    <SpeakerWaveIcon className={'w-5 h-5 fill-[#A7A7A7]'}/>
                    <div className={'bg-neutral-400 w-[93px] h-1 rounded'}></div>
                </div>

            </div>

    )
}


let mapStateToProps = (state)=>{
    return{
        currentTrack: state.PlayingTrack.currentTrack,
        playingStatus: state.PlayingTrack.statusPlayBtn,
        dataTracks: state.PlayingTrack.dataTracks,
        currentTrackID: state.PlayingTrack.currentTrackID,
        nextTrackId: state.PlayingTrack.nextTrackId,
        playlists: state.homePagePlaylists.currentPlaylist,
    }
}

export default connect(mapStateToProps, {changeStatusToPlay,changeStatusToPause,setTrackId,addDataTracks,setNexTrackId,setTrack})(Player);