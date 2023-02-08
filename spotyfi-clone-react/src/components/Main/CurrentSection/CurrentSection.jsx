import React from "react";

import Playlist from "../Playlist/Playlist";
import {connect} from "react-redux";



function CurrentSection({showPopover,showToast,toggleScrolling,sectionData}){
    console.log(sectionData)
    return(
        <div className="relative pt-[48px] pb-[48px] px-[32px] space-y-9">
                <div className="grid grid-cols-main gap-5">
                    {
                        sectionData && sectionData.map(item => <Playlist titleNone showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling} key={item.title} {...item}/>)
                    }
                </div>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return{
        sectionData: state.CurrentSection.currentSection
    }
}

export default connect(mapStateToProps, {})(CurrentSection);