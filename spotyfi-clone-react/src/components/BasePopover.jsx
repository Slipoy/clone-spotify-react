import React, {useRef, useState, useEffect,forwardRef} from "react";
import BaseButton from "./BaseBurron/BaseButton";
import {useImperativeHandle} from "react";



const HIDDEN_CLASSE = "opacity-0 pointer-events-none translate-x-1"
const BasePopover = (_,ref)=>{
    const [classes, setClasses] = useState(HIDDEN_CLASSE)
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()


    const nodeRef = useRef()
    useEffect(()=>{
        function handleClickAway({target}){
            if (!nodeRef.current.contains(target))hide()
        }
        document.addEventListener("mousedown", handleClickAway)
        return ()=> document.removeEventListener("mousedown", handleClickAway)
    })
    useImperativeHandle(ref, () => ({show}))
    function show(title, description){
        setTitle(title);
        setDescription(description);
        setClasses();
    }
    function hide(){
        setClasses(HIDDEN_CLASSE)
    }
    return(
        <div className={`fixed top-[227px] left-[200px]
         z-30 bg-[#0372ea] text-white rounded-lg shadow-2xl p-4 w-[330px]
         select-none transition duration-300 ${classes}`}
        ref={nodeRef}>
            <h3 className='text-lg font-bold mb-2'>{title}</h3>
            <p className='text-xs'>{description}</p>
            <div className='mt-6 text-right'>
                <BaseButton onClick={hide} >Not now</BaseButton>
                <BaseButton primery>Log in</BaseButton>
            </div>
            <div className='w-20 h-20 absolute -top-4 -left-20 flex justify-end items-center overflow-hidden pointer-events-none'>
                <div className='w-3 h-3 bg-[#0e72ea] shadow-2xl translate-x-1/2 rotate-45 pointer-events-auto'></div>
            </div>

        </div>


    )
}



export default forwardRef(BasePopover)