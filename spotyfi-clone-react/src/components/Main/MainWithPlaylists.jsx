import React from "react";
import PlaylistSection from "./SectionPlaylist/PlaylistSection";
import {withRouter} from "../../hooks/withRouter";
import {useEffect} from "react";




function MainWithPlaylists({showToast, showPopover,toggleScrolling,router}){

    return(
        <>
            <PlaylistSection router={router} title='Фокус' showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>
            <PlaylistSection router title='Spotify Playlist' showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>
        </>

    )
}

export default withRouter(MainWithPlaylists);