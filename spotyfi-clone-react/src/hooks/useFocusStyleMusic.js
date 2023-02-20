import React, {useRef, useState} from "react";
import useClickAway from "./useClickAway";




function useFocusStyleMusic(){
    const ref = useRef(null)
    const [isCurrentFocus, setCurrentFocus] = useState(false)
    const [classesCurrent, setClassesCurrent] = useState('')
    const [isHover, setHover] = useState(false);


    const handleCurrent = ()=>{
        setCurrentFocus(!isCurrentFocus)
        if (!isCurrentFocus){
            setClassesCurrent('bg-neutral-600')
        }else setClassesCurrent('')
    }

    const enterCurrent = ()=>{
        if (isCurrentFocus){
            setHover(false)
        }else {
            setHover(true)
            setClassesCurrent('bg-neutral-600/70')
        }

    }
    const leaveCurrent = ()=>{
        if (isCurrentFocus){
            setHover(false)
        }else {
            setHover(false)
            setClassesCurrent('')
        }

    }


    useClickAway(handleCurrent,ref, isCurrentFocus)

    return {
        handleCurrent,
        enterCurrent,
        leaveCurrent,
        isCurrentFocus,
        classesCurrent,
        isHover,
        ref
    }
}


export default useFocusStyleMusic;