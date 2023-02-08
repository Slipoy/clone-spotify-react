import React, {useEffect} from "react";
import useEvent from "./useEvent";





function useOpacityHeader(contentWrapperRef,headerRef) {


    let scrollPos = 0;
    let startOpacityValue = 0
    let scroll = null
    const target = contentWrapperRef.current;
    const changeStyleOpacity = (target)=> target.style.opacity = startOpacityValue
    const changeValueOpacity = (vector, target)=>{
        if (vector) {
            startOpacityValue += 0.015
            changeStyleOpacity(target);
        } else {
            startOpacityValue -= 0.025
            changeStyleOpacity(target)
        }

    }
    const scrollDown = ()=> scroll > scrollPos;
    const handleOpacityHeader = ()=>{
        const header = headerRef.current;
        scroll = target.scrollTop;
        if (scroll < 55) {
            startOpacityValue = 0;
            changeStyleOpacity(header)
            return;
        }else if (scroll > 130){
            setTimeout(function Func (){
                if (startOpacityValue >= 1)return
                changeValueOpacity(scrollDown,header)
                setTimeout(Func,6)
            },6)
            return;

        }else changeValueOpacity(scrollDown(),header)
        scrollPos = scroll;

    }






    return {handleOpacityHeader}

}
export default useOpacityHeader;