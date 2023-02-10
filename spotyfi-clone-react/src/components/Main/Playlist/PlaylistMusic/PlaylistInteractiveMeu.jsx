import React from "react";
import {EllipsisHorizontalIcon, HeartIcon, PlayIcon} from "@heroicons/react/24/outline";
import BaseHelper from "../../../BaseHelper/BaseHelper";




function PlaylistInteractiveMeu(){
    return(
        <div className='relative w-full px-8 py-8 '>
            <div className='flex items-center gap-7 text-[#b3b3b3]'>
                <div className='w-[56px] h-[56px] hover:scale-105'>
                        <span className='flex items-center justify-center w-full h-full bg-[#1abc54] rounded-full'>
                            <PlayIcon className='fill-black text-black w-7 h-7'/>
                        </span>
                </div>
                <div className="relative group">
                    <HeartIcon className='w-10 h-10 group-hover:text-white'/>
                    <p className='group-hover:block bg-[#ffffff1a] w-[150px] absolute -top-[27px] -left-1/2 px-2 py-1 text-[12px] rounded shadow-xl'>
                        Добавить в очередь
                    </p>
                </div>
                <div className="hover:text-white">
                    <EllipsisHorizontalIcon className='w-8 h-8'/>
                </div>
            </div>
            <BaseHelper/>
        </div>
    )

}


export default PlaylistInteractiveMeu;