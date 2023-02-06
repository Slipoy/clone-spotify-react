import React from "react";
import PlaylistSection from "./SectionPlaylist/PlaylistSection";
import {withRouter} from "../../hooks/withRouter";

import {playListData} from "../../musicData";
import {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setToken} from "../Redux/authorization";




function MainWithPlaylists({showToast, showPopover,toggleScrolling,router,token}){
    const playlist = playListData
    const [basePlaylist, setBasePlaylist] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const {data} = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setBasePlaylist(data)

            }
            catch (err){
                console.log(err)

            }
        }
        fetchData()

    },[token])

    return(
        <>
            <PlaylistSection playlist={playlist} router={router} title='Фокус' showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>
            <PlaylistSection playlist={basePlaylist} router title='Spotify Playlist' showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>
        </>

    )
}

let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token
    }
}

export default connect(mapStateToProps, {setToken})(MainWithPlaylists);