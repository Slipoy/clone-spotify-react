import React from "react";
import {useLayoutEffect} from "react";



const hoverPosition = {x:null, y:null}
function useContextHelperPosition (isHelperOpen, ref){
    useLayoutEffect(()=>{
        if (isHelperOpen){
            updateContextMenuPosition()
        }
    })

    const updateContextMenuPosition = ()=>{
        updateContextMenuHorizontalPosition();
        updateContextMenuVerticalPosition();
    }
    const updateContextMenuHorizontalPosition =()=>{
        const menuWidth = ref.current.offsetWidth;
        const shouldMoveLeft = menuWidth > window.innerWidth - hoverPosition.x;


        ref.current.style.left = shouldMoveLeft ? `${hoverPosition.x - menuWidth}px`: `${hoverPosition.x}px`
    }
    function updateContextMenuVerticalPosition(){
        const menuHeight = ref.current.offsetHeight;
        const shouldMoveUp = menuHeight > window.innerHeight - hoverPosition.y;
        ref.current.style.top = shouldMoveUp ? `${hoverPosition.y - menuHeight}px`: `${hoverPosition.y}px`
    }
    function updateClickCoordinates (x, y){

        hoverPosition.x = x
        hoverPosition.y = y - 40

    }
    return updateClickCoordinates
}
export default useContextHelperPosition;