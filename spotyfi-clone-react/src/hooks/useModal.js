import {useState} from "react";


function useModal(){
    const [isOpen, setOpen] = useState(false);

    function open(){
        setOpen(true)
    }
    function close(){
        setOpen(false)
    }

    return {
        open,
        close,
        isOpen

    }
}


export default useModal;