import React from "react";
import {playListData} from "../../../musicData";
import Playlist from "../Playlist/Playlist";
import {NavLink} from "react-router-dom";
import {withRouter} from "../../../hooks/withRouter";




function PlaylistSection({showToast, showPopover,toggleScrolling, title}){
    return(
        <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9">
            <div>
                <div className="flex justify-between items-end mb-[8px]">
                    <div>
                        <h2 className="font-semibold hover:underline capitalize text-2xl">
                            <NavLink to={"/section/" + title}>{title}
                            </NavLink>
                        </h2>
                    </div>
                    <NavLink to={"/section/" + title}
                       className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"> Показать все</NavLink>
                </div>
                <div className="grid grid-cols-main gap-5">
                    {
                        playListData.map(item => <Playlist showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling} key={item.title} {...item}/>)
                    }

                </div>
            </div>
        </div>
    )
}


export default PlaylistSection;