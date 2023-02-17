import {useState,useRef} from "react";
import useContextMenuPosition from "./useContextMenuPosition";
import useContextHelperPosition from "./useContextHelperPosition";



function useContextHelper(){
    const [isHelperOpen, setIsHelper] = useState(false)
    const ref = useRef(null)
    const move = useContextHelperPosition(isHelperOpen, ref)


    let openTimer = null
    const openHelperMenu = ()=> setIsHelper(true)
    const closeHelperMenu =()=>{
        if (openTimer){
            stopOpenHelperMenu();
            return
        }
        setIsHelper(false)
    }
    const startOpenHelperMenu =(e)=> {
        // console.log(window.innerWidth - e.pageX)
        // const menuWidth = ref.current;
        // const shouldMoveLeft = menuWidth > window.innerWidth - e.pageX;
        // console.log(menuWidth)
        // console.log(shouldMoveLeft)
        move(e.clientX, e.clientY)
        openTimer = setTimeout(openHelperMenu, 500)
    }

    const stopOpenHelperMenu = ()=> clearTimeout(openTimer);


    return {
        startOpenHelperMenu,
        closeHelperMenu,
        isHelperOpen,
        ref,
    }
}

export default useContextHelper;