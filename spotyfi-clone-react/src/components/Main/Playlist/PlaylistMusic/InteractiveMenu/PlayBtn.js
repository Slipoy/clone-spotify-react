import React from "react";
import {PlayIcon} from "@heroicons/react/24/outline";



function PlayBtn(){
    return(
        <div className='w-[56px] h-[56px] hover:scale-105'>
                        <span className='flex items-center justify-center w-full h-full bg-[#1abc54] rounded-full'>
                            <PlayIcon className='fill-black text-black w-7 h-7'/>
                        </span>
        </div>
    )
}

export default PlayBtn;