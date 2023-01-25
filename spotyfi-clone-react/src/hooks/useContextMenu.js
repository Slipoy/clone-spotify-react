import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import useContextMenuPosition from "./useContextMenuPosition";
import useClickAway from "./useClickAway";
import useEvent from "./useEvent";


const useContextMenu = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null)
    const move = useContextMenuPosition(isOpen,ref);
    const close= ()=>{
        setIsOpen(!isOpen)
    }
    useClickAway(close,ref, isOpen)
    const open =(e)=>{
        e.preventDefault()

        move(e.clientX, e.clientY)

        setIsOpen(!isOpen)
    }
    useEvent('keydown',handleEsc, ()=> isOpen)
    function handleEsc({key}) {
        if (key === "Escape") {
            close()
        }
    }
    useEffect(() => {
        if (!isOpen) return
    }

)




    return {
        isOpen,
        open,
        ref,
        close,
    }
}
export default useContextMenu;