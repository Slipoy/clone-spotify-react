import React, {forwardRef} from "react";
import BaseSections from './BaseSections'
import {Route, Routes} from "react-router-dom";
import CurrentSection from "./CurrentSection/CurrentSection";
import PlaylistMusic from "./Playlist/PlaylistMusic/PlaylistMusic";








const Main = ({toggleScrolling, showToast,showPopover},ref)=>{
    return(
        <main ref={ref} className="text-white relative bg-[#121212]">
            <div  className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute -top-[70px] w-full"></div>
            <Routes>
                <Route path='/' element={<BaseSections showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>}/>
                <Route path='section/' element={<CurrentSection toggleScrolling={toggleScrolling} showToast={showToast} showPopover={showPopover} />}/>
            </Routes>

            <div className='w-full  h-[100px] pb-[48px] px-[32px]'>
                <div className='w-full border-t-neutral-400 mt-10 border-t' ></div>
            </div>
        </main>
    )
}
export default forwardRef(Main);