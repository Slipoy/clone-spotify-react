import React, {useEffect} from "react";
import useEvent from "./useEvent";





function useOpacityHeader(main, header, startOpacity = 80, endOpacity = 100) {
    const startCoordinateForOpacity = startOpacity;
    const endCoordinateForOpacity = endOpacity;
    function handleScrollCoordinate(main, header) {
        let pointMainTop = main.current.getBoundingClientRect().top;
        let pointHeaderBottom = header.current.getBoundingClientRect().bottom;
        let coordinate = pointHeaderBottom - pointMainTop;
        return coordinate
    }
    function handleOpacity(value) {
        return value / 100;
    }
    function changeOpacityForElement(element,value){
        element.style.opacity = value
    }
    useEffect(() => {
        changeOpacityForElement(header.current, handleOpacity(startOpacity))
        }
    )
    const handlerOpacity = () => {
        const coordinate = handleScrollCoordinate(main, header)
        const el = header.current
        if (coordinate === 0){
            changeOpacityForElement(el, handleOpacity(startOpacity));
        }
        if (coordinate >= startCoordinateForOpacity && coordinate < endCoordinateForOpacity) {
            changeOpacityForElement(el, handleOpacity(coordinate));
        }
        if (coordinate > endCoordinateForOpacity) {
            changeOpacityForElement(el, handleOpacity(endOpacity))
        }
    }
    useEvent("wheel", handlerOpacity);

}
export default useOpacityHeader;