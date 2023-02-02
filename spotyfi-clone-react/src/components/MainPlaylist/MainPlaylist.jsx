import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import MainWithPlaylists from "../Main/MainWithPlaylists";
import CurrentSection from "../Main/CurrentSection/CurrentSection";




function MainPlaylist({showPopover,showToast, toggleScrolling}){
    return(
        <>
            <Header/>
            <div className="h-screen text-white bg-white relative ">
                <div className="h-[275px] bg-white absolute w-full"></div>

            </div>
        </>


    )
}

export default MainPlaylist;


//bg-gradient-to-b from-[#1f1f1f] to-[#121212]