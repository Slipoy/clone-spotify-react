import React, {useRef, useState,forwardRef} from "react";
import BaseButton from "../BaseButton/BaseButton";
import {useImperativeHandle} from "react";
import BasePopoverTriangle from "./BasePopoverTriangle";
import usePopoverPosition from "../../hooks/usePopoverPosition";
import useClickAway from "../../hooks/useClickAway";



const BasePopover = (_,ref)=>{
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const nodeRef = useRef()
    const {move, target, setTarget, isSmallScreen} = usePopoverPosition(nodeRef, hide)
    const [classes, setClasses] = useState(getHiddenClasses);

    function shouldHide(event){
        // return !(target && target.parentNode.contains(event.target))
        return !target?.parentNode.contains(event.target)
    }
    useClickAway(hide,nodeRef, shouldHide)
    useImperativeHandle(ref, () => ({show}))

    function show(title, description, nextTarget, offset) {
        if (target === nextTarget) return
        move(nextTarget, offset)

        setTitle(title);
        setDescription(description);
        setClasses();
    }

    function hide() {
        setTarget(null)
        setClasses(getHiddenClasses)
    }

    function getHiddenClasses() {
        const translateClass = isSmallScreen ? 'translate-y-1' : 'translate-x-1'
        return `opacity-0 pointer-events-none ${translateClass}`
    }


    return(
        <div className={`fixed z-30 bg-[#0372ea] text-white rounded-lg shadow-2xl p-4 w-[330px]
         select-none transition duration-300 ${classes}`}
        ref={nodeRef}>
            <h3 className='text-lg font-bold mb-2'>{title}</h3>
            <p className='text-xs'>{description}</p>
            <div className='mt-6 text-right'>
                <BaseButton onClick={hide} >Not now</BaseButton>
                <BaseButton primery>Log in</BaseButton>
            </div>
            <BasePopoverTriangle side={isSmallScreen ? 'top': 'left'}/>

        </div>


    )
}



export default forwardRef(BasePopover)