import React from "react";
import {PlayIcon} from "@heroicons/react/24/outline";



function PlayBtn({classes,playBtnRef}){
    return(
        <div ref={playBtnRef} className={`${classes} hover:scale-105`}>
                        <span className='flex items-center justify-center w-full h-full bg-[#1abc54] rounded-full'>
                            <PlayIcon className='fill-black text-black w-1/2 h-1/2'/>
                        </span>
        </div>
    )
}

export default PlayBtn;