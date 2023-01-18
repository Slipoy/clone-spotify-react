import React, {useEffect, useRef} from "react";
import PlaylistContextSubmenu from "./PlaylistContextSubmenu";


const PlaylistContextMenu = ({onClose},ref)=>{
    useEffect(()=>{
        function handleClick(e){
            if (!ref.current.contains(e.target)){
                onClose()
            }
        }
        function handleEsc(e){
            if (e.keyCode === 27){
                onClose()
            }
        }
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleEsc);
        return ()=> {
            document.removeEventListener("mousedown", handleClick)
            document.removeEventListener("keydown", handleEsc)
        }
    })
    return(
        <ul ref={ref} className="fixed bg-[#282828] text-[#aeaeae] text-sm p-1 rounded
                            shadow-xl cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] z-10 ">
            <li>
                <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Add to Your Library
                </button>
            </li>
            <li className="relative">
                <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default
                                     flex justify-between items-center peer">
                    Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </button>
                <PlaylistContextSubmenu/>
            </li>
            <li>
                <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    About recommendations
                </button>
            </li>
            <li>
                <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Open in Desktop app
                </button>
            </li>
        </ul>
    )
}
export default React.forwardRef(PlaylistContextMenu)