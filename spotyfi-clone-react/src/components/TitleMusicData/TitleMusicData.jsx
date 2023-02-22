import React, {useEffect, useRef, useState} from "react";
import {ClockIcon} from "@heroicons/react/24/outline";
import useEvent from "../../hooks/useEvent";




function TitleMusicData({headerRef,contentWrapperRef}){
    const heightHeader = headerRef.current.getBoundingClientRect().height;
    const [titleDataMusicClasses, setTitleDataMusicClasses] = useState('')
    const titleRef = useRef();
    const handleClassesTitle = ()=>{
        const titleTop = titleRef.current.getBoundingClientRect().top;
        if (titleTop === heightHeader){
            setTitleDataMusicClasses(`bg-neutral-800`)
        }else {
            setTitleDataMusicClasses('');
        }
    }
    useEvent('scroll',handleClassesTitle, true, ()=>contentWrapperRef.current)
    return(
        <div className={`sticky top-[${heightHeader + 'px'}] border-neutral-400 px-8 z-10 ${titleDataMusicClasses}`}>
            <div ref={titleRef} className={`grid grid-cols-music px-8 py-4 w-full border-b border-neutral-400`}>
                <div className='flex gap-5 w-1/3'>
                    <span>#</span>
                    <span className=''>НАЗВАНИЕ</span>

                </div>
                <div className=''>
                    АЛЬБОМ
                </div>
                <div className='flex justify-end'>
                    <ClockIcon className='w-5 h-5'/>
                </div>
            </div>
        </div>


    )
}
export default TitleMusicData;