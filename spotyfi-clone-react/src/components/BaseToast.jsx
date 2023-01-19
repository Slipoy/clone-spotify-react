import React, {useImperativeHandle, useState} from "react";
import {useRef} from "react";



const BaseToast = ({test}, ref)=>{
    const [opacityClass, setOpacity]=useState('opacity-0')
    // const [toastMessage, setToastMessage] = useState()
    let hideTimer = useRef()
    useImperativeHandle(ref, () => ({
            show: ()=> {
                clearInterval(hideTimer.current);

                setOpacity('opacity-1');

                hideTimer.current = setTimeout(()=> setOpacity('opacity-0'), 1000)
            }
    }))
    return(
        <div className={`fixed left-1/2 bottom-28 z-30 bg-[#2e76d0]
         text-white tracking-wide whitespace-nowrap rounded-lg
          -translate-x-1/2' shadow-3xl py-3 px-8 pointer-events-none transition-opacity duration-700 ${opacityClass}`}>
            Link copied to clipboard
        </div>
    )
}
export default React.forwardRef(BaseToast)