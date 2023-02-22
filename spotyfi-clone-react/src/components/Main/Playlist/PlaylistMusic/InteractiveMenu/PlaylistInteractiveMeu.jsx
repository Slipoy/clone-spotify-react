import React from "react";
import {PlayIcon} from "@heroicons/react/24/outline";
import FavoritesBtn from "./FavoritesBtn";
import ContextMenu from "./ContextMenu";
import useModal from "../../../../../hooks/useModal";
import ThemodalEmbedPlaylist from "../../../../The modalEmbedPlaylist/ThemodalEmbedPlaylist";
import TheModalRecommendation from "../../../../BaseModal/TheModalRecommendation";
import PlaylistContextMenu from "../../PlaylistContextMenu";
import useContextMenu from "../../../../../hooks/useContextMenu";
import {useLayoutEffect} from "react";
import PlayBtn from "./PlayBtn";




function PlaylistInteractiveMeu({showPopover,showToast,toggleScrolling,spotifyUrl,playBtnRef}){
    const recommendationModal = useModal();
    const embedModal = useModal()
    const {
        isOpen : isOpenMenu,
        open :openMenu,
        ref:menuRef,
        close: closeMenu
    } = useContextMenu(toggleScrolling)
    useLayoutEffect(() => toggleScrolling(!isOpenMenu))
    return(
        <div className='relative w-full px-8 py-8 '>
            <div className='flex items-center gap-7 text-[#b3b3b3]'>
                <PlayBtn playBtnRef={playBtnRef} classes={'w-[56px] h-[56px]'}/>
                <FavoritesBtn showToast={showToast} size={'w-10 h-10'} />
                <ContextMenu openMenu={openMenu}/>
            </div>

            {
                embedModal.isOpen && <ThemodalEmbedPlaylist spotifyUrl={spotifyUrl} onClose={embedModal.close}/>
            }
            {
                recommendationModal.isOpen && <TheModalRecommendation onClose={recommendationModal.close}/>
            }
            {
                isOpenMenu && <PlaylistContextMenu openEmbedModal={embedModal.open} openRecomModal={recommendationModal.open} isOpenMenu={isOpenMenu} showPopover={showPopover} closeMenu={closeMenu} ref={menuRef} showToast={showToast}/>
            }
        </div>
    )

}


export default PlaylistInteractiveMeu;