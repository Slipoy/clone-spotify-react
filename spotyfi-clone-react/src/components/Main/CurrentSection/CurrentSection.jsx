import React from "react";
import {NavLink} from "react-router-dom";
import {playListData} from "../../../musicData";
import Playlist from "../Playlist/Playlist";


function CurrentSection({showPopover,showToast,toggleScrolling}){
    return(
        <div className="relative pt-[48px] pb-[48px] px-[32px] space-y-9">
                <div className="grid grid-cols-main gap-5">
                    {
                        playListData.map(item => <Playlist titleNone showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling} key={item.title} {...item}/>)
                    }
                </div>
        </div>
    )
}

export default CurrentSection;