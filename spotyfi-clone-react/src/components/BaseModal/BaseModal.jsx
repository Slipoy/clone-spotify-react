import ReactDOM from 'react-dom';
import React, {useEffect, useRef} from "react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import useEvent from "../../hooks/useEvent";


function BaseModal({classes,onClose: handleClose,children, position}) {
    let positionClasses = null;
    let animationClasses = ''
    if (position){
        positionClasses = ''
    }else {
        positionClasses = 'items-center opacity-0 transition-opacity duration-500'
        animationClasses = '-translate-y-10 transition-transform duration-500'
    }

    const ref = useRef()
    const contentRef = useRef()

    useEffect(() => {
        setTimeout(animate);
    })
    useEvent('keydown',handleEsc);
    function handleEsc({key}){
        if (key === "Escape")close()
    }

    function close(){
        animate(true)
        setTimeout(handleClose, 500)
    }
    function animate(isClosing = false){
        ref.current.classList.toggle("opacity-0", isClosing);
        contentRef.current.classList.toggle("-translate-y-10", isClosing);
    }


    return ReactDOM.createPortal(
        <div onClick={close}
             className={`text-white fixed inset-0 bg-black/70 z-30 flex justify-center ${positionClasses} `}
             ref={ref}
             role='dialog'>
            <div ref={contentRef} onClick={(event => event.stopPropagation())}
                 className={`flex flex-col relative rounded-xl ${animationClasses} ${classes}`}>
                <button onClick={close} className='absolute right-0 p-3 text-neutral-500 hover:text-neutral-200'>
                    <XMarkIcon className='w-8 h-8'/>
                </button>
                {children}
            </div>
        </div>, document.body)
}


export default BaseModal