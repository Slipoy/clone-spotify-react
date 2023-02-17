import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setCurrentPlaylist} from "../../../../Redux/basePlaylist";
import {withRouter} from "../../../../../hooks/withRouter";
import FavoritesBtn from "../InteractiveMenu/FavoritesBtn";
import ContextMenu from "../InteractiveMenu/ContextMenu";
import useModal from "../../../../../hooks/useModal";
import useContextMenu from "../../../../../hooks/useContextMenu";
import {useLayoutEffect} from "react";
import ThemodalEmbedPlaylist from "../../../../The modalEmbedPlaylist/ThemodalEmbedPlaylist";
import TheModalRecommendation from "../../../../BaseModal/TheModalRecommendation";
import PlaylistContextMenu from "../../PlaylistContextMenu";



function Music({track, id, toggleScrolling, showToast,showPopover}){
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
        <div className='grid grid-cols-music h-[56px] rounded px-8 group hover:bg-neutral-600/70'>
            <div className='flex items-center gap-5'>
                <span>{id + 1}</span>
                <div className='w-[40px] h-[40px]'><img src={track.album.images[2].url} alt=""/></div>
                <div className='flex flex-col justify-between'>
                    <span className='text-white text-[16px] '>{track.name}</span>
                    <div className='flex gap-1'>
                        <span className='flex items-center h-4 px-[5px] py-[3px] bg-neutral-400 rounded text-black text-[9px]'>E</span>
                        <span>{track.artists[0].name}</span>
                    </div>

                </div>
            </div>
            <div className='flex items-center'>
                {track.album.name}
            </div>
            <div className='relative flex justify-end items-center'>
                <FavoritesBtn showToast={showToast} size={'w-5 h-5 hidden group-hover:block'}/>
                    <span className={'ml-10 mr-2'}>
                        3:21
                    </span>
                <div className={'absolute -right-8 w-8 h-8 hidden group-hover:block'}>
                    <ContextMenu openMenu={openMenu}/>
                </div>

            </div>
            {
                embedModal.isOpen && <ThemodalEmbedPlaylist spotifyUrl={`track/${track.id}`} onClose={embedModal.close}/>
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



let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token,
        playlists: state.homePagePlaylists.currentPlaylist
    }
}

export default connect(mapStateToProps, {})(Music);