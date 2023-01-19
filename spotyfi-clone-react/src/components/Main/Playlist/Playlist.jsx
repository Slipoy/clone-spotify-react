import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import PlaylistContextMenu from "./PlaylistContextMenu";
import PlaylistCover from "./PlaylistCover";
import PlaylistBtn from "./PlaylistBtn";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistDescription from "./PlaylistDescription";
import useMenu from "../../../hooks/useContextMenu";
import BaseToast from "../../BaseToast";






const Playlist = ({coverUrl, title, description, classes, toggleScrolling,showToast})=>{

    const {
        isOpen : isOpenMenu,
        open :openMenu,
        ref:menuRef,
        close: closeMenu
    } = useMenu(toggleScrolling)


    useLayoutEffect(() => toggleScrolling(!isOpenMenu))
    const bgClasses = isOpenMenu ? "bg-[#272727]" :"bg-[#181818] hover:bg-[#272727]"

    return (
        <>
            <a href="spotyfi-clone-react/src/components/Main/Main#"
               className={`relative p-4 rounded-mb  duration-200 group ${classes} ${bgClasses}`}
               onContextMenu={openMenu} onClick={event => event.preventDefault()}>
                <div className="relative">
                    <PlaylistCover url={coverUrl}/>
                    <PlaylistBtn/>
                </div>
                <PlaylistTitle title={title}/>
                <PlaylistDescription description={description}/>
                {
                    isOpenMenu && <PlaylistContextMenu closeMenu={closeMenu} ref={menuRef} showToast={showToast}/>
                }

            </a>


        </>

    )
}
export default Playlist