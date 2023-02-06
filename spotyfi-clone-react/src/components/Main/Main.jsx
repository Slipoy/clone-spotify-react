import React, {forwardRef} from "react";

import {Routes, Route} from "react-router-dom";
import MainWithPlaylists from "./MainWithPlaylists";
import CurrentSection from "./CurrentSection/CurrentSection";





const Main = ({toggleScrolling, showToast,showPopover},ref)=>{
    return(
        <main ref={ref} className="text-white relative bg-[#121212] ">
            <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute -top-[70px] w-full"></div>
            <Routes>
                <Route path='/' element={<MainWithPlaylists showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>
                } />
                <Route path='/section/:title' element={<CurrentSection showToast={showToast} showPopover={showPopover} toggleScrolling={toggleScrolling}/>}/>

            </Routes>
            <div className='w-full  h-[100px] pb-[48px] px-[32px]'>
                <div className='w-full border-t-neutral-400 mt-10 border-t' ></div>
            </div>
        </main>
    )
}
export default forwardRef(Main);