import React from "react";
import {ChevronRightIcon} from "@heroicons/react/24/outline";


const PlaylistBtn=()=>{

    return(
        <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
           <ChevronRightIcon className='w-5 h-5'/>

        </button>
    )
}

export default PlaylistBtn