import React,{useState} from "react";
import useEvent from "./useEvent";
import {debounce} from "../utils";



function useHeaderPlayBtnOpacity(playBtnRef,headerRef,contentWrapperRef){



    const [classesShow, setClassesShow]=useState('opacity-0')

    const showHeaderPlayBtn =()=>{
        const positionPlayBtn = playBtnRef.current.getBoundingClientRect().top;
        const dotForShowHeaderBtn = headerRef.current.getBoundingClientRect().bottom;
        if (positionPlayBtn <= dotForShowHeaderBtn){
                setClassesShow('opacity-1')
            }else setClassesShow('opacity-0')

        }

    const deBounceScroll = debounce.bind(null, showHeaderPlayBtn, 10)
    useEvent('scroll',deBounceScroll, true, ()=>contentWrapperRef.current)


    return{
        classesShow
    }

}


export default useHeaderPlayBtnOpacity;