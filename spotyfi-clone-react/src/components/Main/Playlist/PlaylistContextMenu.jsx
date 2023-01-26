import React, {useEffect, useRef, useState} from "react";
import PlaylistContextSubmenu from "./PlaylistContextSubmenu";
import useSubMenu from "../../../hooks/useContextSubMenu";


const PlaylistContextMenu = ({ showToast,closeMenu,showPopover,openRecomModal,openEmbedModal},ref)=>{
    const reF = useRef(null)

    // document.addEventListener("mousedown", onClose)

    const {openSubMenu, startCloseSubMenuTimer,isSubMenu,menuPositionXclass} = useSubMenu(closeMenu, reF)

    const test = document.querySelector("nav a:nth-child(4)")


    return(
        <ul ref={ref} className="fixed bg-[#282828] text-[#aeaeae] text-sm p-1 rounded
                            shadow-xl cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] z-10 ">
            <li onClick={()=>{
                showPopover("test", "test", test)
            }}>
                <button  className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Add to Your Library
                </button>
            </li>
            <li ref={reF} className="relative" onMouseEnter={openSubMenu} onMouseLeave={startCloseSubMenuTimer}>
                <button  className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default
                                     flex justify-between items-center">
                    Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </button>
                {
                    isSubMenu && <PlaylistContextSubmenu openEmbedModal={openEmbedModal} closeMenu={closeMenu} showToast={showToast} classes={`absolute top-0 ${menuPositionXclass} bg-[#282828] text-[#aeaeae] text-sm p-1 rounded shadow-xl cursor-default`}/>
                }

            </li>
            <li>
                <button onClick={()=>{
                    closeMenu()
                    openRecomModal()
                }} className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
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