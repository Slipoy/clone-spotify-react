import React from "react";
import PlaylistInteractiveMeu from "./PlaylistInteractiveMeu";
import HeaderPlaylist from "./HeaderPlaylist";





function PlaylistMusic(){
    return(
        <main className="text-white relative bg-[#121212]">
            <div className="bg-[rgb(144,168,192)] h-[340px] absolute -top-[110px] w-full">
                {/*<div className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,.5)] h-full w-full"></div>*/}
            </div>
            <HeaderPlaylist/>
            <PlaylistInteractiveMeu/>
            <div className='w-full  h-[100px] pb-[48px] px-[32px]'>
                <div className='w-full border-t-neutral-400 mt-10 border-t' ></div>
            </div>
        </main>

    )
}

export default PlaylistMusic;