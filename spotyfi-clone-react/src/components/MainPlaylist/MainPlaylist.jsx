import React from "react";
import Header from "../Header/Header";




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