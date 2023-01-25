import React, {useLayoutEffect, useState} from "react";
import PlaylistContextMenu from "./PlaylistContextMenu";
import PlaylistCover from "./PlaylistCover";
import PlaylistBtn from "./PlaylistBtn";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistDescription from "./PlaylistDescription";
import useMenu from "../../../hooks/useContextMenu";
import TheModalRecommendation from "../../BaseModal/TheModalRecommendation";
import useModal from "../../../hooks/useModal";
import ThemodalEmbedPlaylist from "../../The modalEmbedPlaylist/ThemodalEmbedPlaylist";







const Playlist = ({coverUrl, title, description, classes, toggleScrolling,showToast,showPopover})=>{


    const recommendationModal = useModal();
    const embedModal = useModal()

    const {
        isOpen : isOpenMenu,
        open :openMenu,
        ref:menuRef,
        close: closeMenu
    } = useMenu(toggleScrolling)


    useLayoutEffect(() => toggleScrolling(!isOpenMenu))
    const bgClasses = isOpenMenu ? "bg-[#272727]" :"bg-[#181818] hover:bg-[#272727]"

    const test = document.querySelector("nav a:nth-child(4)")


    return (
        <>
            <a href="/"
               className={`relative p-4 rounded-mb  duration-200 group ${classes} ${bgClasses}`}
               onContextMenu={openMenu} onClick={event => {
                event.preventDefault();
                showPopover('Create a playlist',
                'Log in to create and share playlist',test)
            }}>
                <div className="relative">
                    <PlaylistCover url={coverUrl}/>
                    <PlaylistBtn/>
                </div>
                <PlaylistTitle title={title}/>
                <PlaylistDescription description={description}/>
                {
                    isOpenMenu && <PlaylistContextMenu openEmbedModal={embedModal.open} openRecomModal={recommendationModal.open} isOpenMenu={isOpenMenu} showPopover={showPopover} closeMenu={closeMenu} ref={menuRef} showToast={showToast}/>
                }

            </a>
            {
                recommendationModal.isOpen && <TheModalRecommendation onClose={recommendationModal.close}/>
            }
            {
                embedModal.isOpen && <ThemodalEmbedPlaylist onClose={embedModal.close}/>
            }



        </>

    )
}
export default Playlist