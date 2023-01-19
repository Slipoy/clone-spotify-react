import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import useContextMenuPosition from "./useContextMenuPosition";


const useContextMenu = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null)
    const move = useContextMenuPosition(isOpen,ref)
    const open =(e)=>{
        e.preventDefault()

        move(e.clientX, e.clientY)

        setIsOpen(!isOpen)
    }
    const close= ()=>{
        setIsOpen(!isOpen)
    }




    return {
        isOpen,
        open,
        ref,
        close,
    }
}
export default useContextMenu;