import React from "react";
import PlaylistSection from "./SectionPlaylist/PlaylistSection";
import {withRouter} from "../../hooks/withRouter";

import {focusData} from "../../musicData";
import {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setToken} from "../Redux/authorization";
import homePagePlaylists, {setPlaylistSpotify} from "../Redux/basePlaylist";




function MainWithPlaylists({showToast, showPopover,toggleScrolling,router,sectionsPlaylists}){
    // const token = 'BQDIKurxe1G9mPlYMTdqI5BSZRpZJ9V7JfDAd19LSad_aRWy6Eskw5wlau5Gh_sUdRuwnhvbBMgh-DoV52A-KCMDgsCNiImft0ZqZ0wPho7iaEgUks_D_F89v4e6oT7bCBqtjFjEQVmy321Avapt15gH_qp0eA_4WEKHDaIu-YNqkS8M1vmLGRcFfdkl84hu'
    // const teste = 'BQDj8thlCIhqNs0TLeJjo_wE5Wr5e8V2xL3Vj0FpOh1tXLkGnr2KdvCG-BOlYLOEnIo6m5lYCik-7T4YGL7VSKvPEq5KCm7Ms_CClfuflNhBiPNYddady5JGUEmVy9eUHqIm0eoAaLAON3WJeOshJCiRsb3UXD3u_X9i8COu_6Zx5uwTBD1cpXA805RpesAF'
    // const [basePlaylist, setBasePlaylist] = useState()
    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         try{
    //             const {data} = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
    //                 headers: {
    //                     Authorization: `Bearer ${teste}`
    //                 }
    //             })
    //             setPlaylistSpotify(data.playlists.items)
    //
    //         }
    //         catch (err){
    //             console.log(err)
    //
    //         }
    //     }
    //     fetchData()
    //
    // },[token])
    console.log(sectionsPlaylists)

    return(
        <>
            {
                sectionsPlaylists && sectionsPlaylists.map(section =>
                    <PlaylistSection title={section.title} key={section.title} playlist={section.data} router={router} showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>
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

export default connect(mapStateToProps, {setToken})(MainWithPlaylists);