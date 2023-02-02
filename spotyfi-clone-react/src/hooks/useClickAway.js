
import useEvent from "./useEvent";


function useClickAway(handler,ref,shouldHandle = true){
    useEvent('mousedown',handleMouseDown)
    function handleMouseDown(event) {
        const handle = shouldHandle instanceof Function ? shouldHandle(event): shouldHandle;
        if (handle && !ref.current.contains(event.target)) handler()
    }
}

export default useClickAway;