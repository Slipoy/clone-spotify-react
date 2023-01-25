import React, {useEffect,useState,useRef} from "react";
import {debounce, MIN_DESKTOP_WIDTH} from "../utils";
import useEvent from "./useEvent";



function isCurrentWindowWidthIsSmall(){
    return window.innerWidth < MIN_DESKTOP_WIDTH

}
function isCurrentWindowWidthIsBig(){
    return window.innerWidth >= MIN_DESKTOP_WIDTH

}
function usePopoverPosition(ref, hide){
    const [isSmallScreen, setIsSmallScreen] = useState(isCurrentWindowWidthIsSmall);
    const [target, setTarget] = useState()
    const changeWidthTimer = useRef()
    function handleResize() {
        if (!screenHasBecomeSmall() && !screenHasBecomeBig()) return
        hide();
        clearTimeout(changeWidthTimer.current);
        changeWidthTimer.current = setTimeout(() => {
            setIsSmallScreen(isCurrentWindowWidthIsSmall)
        }, 300)
    }
    const deBounceResize = debounce.bind(null, handleResize, 300)

    useEvent('resize',deBounceResize, true, window)
    function move(target, offset){
        offset = offset ? offset : culculateTargetOffset(target)
        ref.current.style.top = `${offset.top}px`;
        ref.current.style.left = `${offset.right}px`;
        setTarget(target)
    }
    function screenHasBecomeSmall(){
        return isCurrentWindowWidthIsSmall && !isSmallScreen

    }
    function screenHasBecomeBig(){
        return isCurrentWindowWidthIsBig && isSmallScreen
    }
    function culculateTargetOffset(target){
        const {top ,right, left, height} = target.getBoundingClientRect();
        return {
            top: isSmallScreen ? top + height *2 : top - (height/3) * 2,
            right:isSmallScreen ? left : right + 30
        }
    }
    return {move,target, setTarget, isSmallScreen};
}

export default usePopoverPosition;

