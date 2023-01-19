import React, {useRef} from "react";
import logo from "../../Sidebar/Logo";


const PlaylistContextSubmenu = ({classes,showToast,closeMenu})=>{
    const menuItemRef = useRef(null)


    return(
        <ul ref={menuItemRef} className={classes}>
            <li>
                <button onClick={() => {
                    showToast("Copy link to playlist")
                    closeMenu()
                }} className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Copy link to playlist
                </button>
            </li>
            <li>
                <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Embed playlist
                </button>
            </li>
        </ul>
    )
}

export default PlaylistContextSubmenu