import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import PlaylistContextMenu from "./PlaylistContextMenu";
import PlaylistCover from "./PlaylistCover";
import PlaylistBtn from "./PlaylistBtn";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistDescription from "./PlaylistDescription";





const clickPosition = {x:null, y:null}
const Playlist = ({coverUrl, title, description, classes, toggleScrolling})=>{
    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false);
    const contextMenuRef = useRef(null)
    const bgClasses = isOpenContextMenu ? "bg-[#272727]" :"bg-[#181818] hover:bg-[#272727]"
    const openContextmenu =(e)=>{
        e.preventDefault()
        clickPosition.x = e.clientX
        clickPosition.y = e.clientY
        setIsOpenContextMenu(!isOpenContextMenu)
    }
    const closeContextMenu= ()=>{
        setIsOpenContextMenu(!isOpenContextMenu)
    }

    const updateContextMenuPosition = ()=>{
        contextMenuRef.current.style.top = `${clickPosition.y}px`;
        contextMenuRef.current.style.left = `${clickPosition.x}px`;
    }
    useLayoutEffect(()=>{
        toggleScrolling(!isOpenContextMenu)
        if (isOpenContextMenu){
            updateContextMenuPosition()
        }
    })

    return(
        <a href="spotyfi-clone-react/src/components/Main/Main#"
           className={`relative p-4 rounded-mb  duration-200 group ${classes} ${bgClasses}`}
        onContextMenu={openContextmenu} onClick={event => event.preventDefault()}>
            <div className="relative">
                <PlaylistCover url={coverUrl}/>
                <PlaylistBtn />
            </div>
            <PlaylistTitle title={title}/>
            <PlaylistDescription description={description}/>
            {
                isOpenContextMenu && <PlaylistContextMenu ref={contextMenuRef} onClose={closeContextMenu}/>
            }

        </a>
    )
}
export default Playlist