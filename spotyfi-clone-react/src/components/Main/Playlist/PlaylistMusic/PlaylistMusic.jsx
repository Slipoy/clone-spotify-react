import React, {useEffect, useState} from "react";
import PlaylistInteractiveMeu from "./InteractiveMenu/PlaylistInteractiveMeu";
import HeaderPlaylist from "./HeaderPlaylist/HeaderPlaylist";
import {ClockIcon} from "@heroicons/react/24/outline";
import Music from "./Music/Music";
import {withRouter} from "../../../../hooks/withRouter";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import homePagePlaylists, {deletePlaylist, setCurrentPlaylist} from "../../../Redux/basePlaylist";
import MusicData from "./MusicData/MusicData";
import {addDataTracks} from "../../../Redux/PlayingTrack";


function PlaylistMusic({showPopover,showToast,toggleScrolling,token,setCurrentPlaylist,playBtnRef,router,headerRef,titleRef, classes,contentWrapperRef,addDataTracks}){
    const id = router.params.id
    const [dataLoaded, setDataLoaded] = useState(false)
    useEffect(()=>{
        const getMusic = async ()=>{

            const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setCurrentPlaylist(data);
            // addDataTracks(data.tracks.items);
            setDataLoaded(true)
        }
        getMusic()



    },[id])


    return(
        <main className="h-screen text-white relative bg-[#121212]">
            {
                dataLoaded ? <>
                    <div className="bg-[rgb(144,168,192)] h-[340px] absolute -top-[110px] w-full">
                        {/*<div className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,.5)] h-full w-full"></div>*/}
                    </div>
                    <HeaderPlaylist/>
                    <div className="h-[275px] bg-gradient-to-b from-[rgba(144,168,192,.5)] to-[rgba(144,168,192,0)] absolute top-[270px] w-full"></div>
                    <PlaylistInteractiveMeu playBtnRef={playBtnRef} spotifyUrl={`playlist/${id}`} showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling}/>
                    <MusicData contentWrapperRef={contentWrapperRef} classes={classes} titleRef={titleRef} headerRef={headerRef} showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling}/>
                </>: <div>загрузка</div>
            }


        </main>

    )
}

let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token,
        playlists: state.homePagePlaylists.currentPlaylist
    }
}

export default compose (connect(mapStateToProps, {setCurrentPlaylist,deletePlaylist,addDataTracks}),withRouter)(PlaylistMusic);