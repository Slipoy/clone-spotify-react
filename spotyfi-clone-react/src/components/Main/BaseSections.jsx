import React from "react";
import PlaylistSection from "./SectionPlaylist/PlaylistSection";
import {withRouter} from "../../hooks/withRouter";

import {focusData} from "../../musicData";
import {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setToken} from "../Redux/authorization";
import homePagePlaylists, {setPlaylistSpotify} from "../Redux/basePlaylist";




function BaseSections({showToast, showPopover,toggleScrolling,router,sectionsPlaylists}){

    return(
        <>
            {
                sectionsPlaylists && sectionsPlaylists.map((section, i) =>
                    <PlaylistSection title={section.title} key={i} playlist={section.data} router={router} showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>
                )
            }

        </>

    )
}

let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token,
        sectionsPlaylists: state.homePagePlaylists.playlists
    }
}

export default connect(mapStateToProps, {setToken})(BaseSections);