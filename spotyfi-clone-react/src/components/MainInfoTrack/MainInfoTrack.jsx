import React from "react";


function MainInfoTrack({trackName, artistName, trackImg, imgClasses, isE}){
    return(
        <>
            <div className={`${imgClasses}`}><img src={trackImg} alt=""/></div>
            <div className='flex flex-col justify-center'>
                <span className='text-white text-[16px] '>{trackName}</span>
                <div className='flex gap-1'>
                    {
                        isE && <span className='flex items-center h-4 px-[5px] py-[3px] bg-neutral-400 rounded text-black text-[9px]'>E</span>
                    }

                    <span className={'text-[#B3B3B3]'}>{artistName}</span>
                </div>

            </div>
        </>

    )
}

export default MainInfoTrack;