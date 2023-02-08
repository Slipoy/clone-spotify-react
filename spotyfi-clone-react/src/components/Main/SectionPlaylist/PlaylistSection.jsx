import React, {useEffect, useState} from "react";
import Playlist from "../Playlist/Playlist";
import {NavLink} from "react-router-dom";

import {connect} from "react-redux";
import {setToken} from "../../Redux/authorization";
import {setCurrentSection} from "../../Redux/CurrentSection";




function PlaylistSection({showToast, showPopover,toggleScrolling, title, playlist,setCurrentSection}){
    const showAllPlaylist =()=>{
        setCurrentSection(playlist)
    }
    return(
        <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9">
            <div>
                <div className="flex justify-between items-end mb-[8px]">
                    <div>
                        <h2 className="font-semibold hover:underline capitalize text-2xl">
                            <NavLink to={"/clone-spotify-react/section"} onClick={showAllPlaylist}>{title}
                            </NavLink>
                        </h2>
                    </div>
                    <NavLink to={"/section/" + title} onClick={showAllPlaylist}
                       className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"> Показать все</NavLink>
                </div>
                <div className="grid grid-cols-main gap-5">
                    {
                        playlist && playlist.map((item, i ) => <Playlist showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling} key={i} {...item}/>)
                    }

                </div>
            </div>
        </div>
    )
}


let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token
    }
}

export default connect(mapStateToProps, {setToken,setCurrentSection})(PlaylistSection);