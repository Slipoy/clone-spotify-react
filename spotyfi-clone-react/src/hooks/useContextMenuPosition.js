import {useLayoutEffect} from "react";



const clickPosition = {x:null, y:null}
function useContextMenuPosition(isOpenContextMenu, ref){

    useLayoutEffect(()=>{
        if (isOpenContextMenu){
            updateContextMenuPosition()
        }
    })
    const updateContextMenuPosition = ()=>{
        updateContextMenuHorizontalPosition()
        updateContextMenuVerticalPosition()
    }

    function updateContextMenuHorizontalPosition(){
        const menuWidth = ref.current.offsetWidth;
        const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;
        ref.current.style.left = shouldMoveLeft ? `${clickPosition.x - menuWidth}px`: `${clickPosition.x}px`
        console.log(menuWidth)
        console.log(clickPosition.x)
        console.log(clickPosition.x - menuWidth)
    }
    function updateContextMenuVerticalPosition(){
        const menuHeight = ref.current.offsetHeight;
        const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;
        ref.current.style.top = shouldMoveUp ? `${clickPosition.y - menuHeight}px`: `${clickPosition.y}px`
    }

    function updateClickCoordinates (x, y){

        clickPosition.x = x
        clickPosition.y = y

    }


    return updateClickCoordinates
}


export default useContextMenuPosition
