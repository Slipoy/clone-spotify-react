import React, {useEffect, useState} from "react";
import useEvent from "./useEvent";





function useOpacityHeader(contentWrapperRef,headerRef) {

const [opacity, setOpacity] = useState(0)
    let scrollPos = 0;
    let startOpacityValue = 0.5
    let scroll = null
    const target = contentWrapperRef.current;
    const changeStyleOpacity = (target)=> target.style.opacity = startOpacityValue
    const changeValueOpacity = (vector, target)=>{
        if (vector) {
            startOpacityValue += 0.015
            changeStyleOpacity(target);
        } else {
            startOpacityValue -= 0.015
            changeStyleOpacity(target)
        }

    }
    const scrollDown = ()=> scroll > scrollPos;
    const handleOpacityHeader = ()=>{
        const header = headerRef.current;
        scroll = target.scrollTop;
        if (scroll <= 55) {
            startOpacityValue = 0.5;
            changeStyleOpacity(header)
            return;
        }else if (scroll > 130){
            startOpacityValue = 1;
            changeStyleOpacity(header)
            return;

        }else changeValueOpacity(scrollDown(),header)
        scrollPos = scroll;

    }

    //
    // const [opacity, setOpacity] = useState(0);
    // let scrollPos = 0
    // useEffect(() => {
    //     const header = headerRef.current;
    //     const contentWrapper = contentWrapperRef.current;
    //     const MIN_OPACITY = 0;
    //     const MAX_OPACITY = 1;
    //     const OPACITY_INCREMENT = 0.015;
    //     const OPACITY_DECREMENT = 0.025;
    //     const MIN_SCROLL_POSITION = 55;
    //     const MAX_SCROLL_POSITION = 130;
    //     let testValue = 0;
    //
    //
    //     const updateOpacity = () => {
    //         const scroll = contentWrapperRef.current.scrollTop
    //         const isScrollingDown = scroll > scrollPos;
    //         // console.log(isScrollingDown)
    //         // console.log(scroll)
    //         // console.log(scrollPos)
    //
    //
    //         if (scroll < MIN_SCROLL_POSITION) {
    //             setOpacity(MIN_OPACITY);
    //         } else if (scroll > MAX_SCROLL_POSITION) {
    //             setOpacity(MAX_OPACITY);
    //         } else if (isScrollingDown) {
    //             setOpacity(Math.min(opacity + OPACITY_INCREMENT, MAX_OPACITY));
    //             // console.log(isScrollingDown)
    //             // console.log(opacity)
    //         } else if (!isScrollingDown) {
    //             console.log("work")
    //             setOpacity(Math.max(opacity - OPACITY_DECREMENT, MIN_OPACITY));
    //         }
    //         console.log(scroll)
    //
    //         scrollPos = scroll;
    //     };
    //
    //     contentWrapper.addEventListener('scroll', updateOpacity);
    //
    //     return () => {
    //         contentWrapper.removeEventListener('scroll', updateOpacity);
    //     };
    // }, [opacity]);
    // console.log(opacity)
    //
    //
    // return { opacity };





    return {handleOpacityHeader}

}
export default useOpacityHeader;