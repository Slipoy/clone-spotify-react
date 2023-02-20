import React, {useState} from "react";
import {PlayIcon,PauseIcon} from "@heroicons/react/24/solid";




function PlayBtn(){
    const [isPlay, setIsPlay] = useState(true);
    return(
        <div onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            setIsPlay(!isPlay)
        }}>
            {
                isPlay ? <PlayIcon/> : <PauseIcon/>
            }

        </div>
    )

}

export default PlayBtn;