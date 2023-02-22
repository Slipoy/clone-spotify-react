import React, {useState} from "react";
import {connect} from "react-redux";
import FavoritesBtn from "../InteractiveMenu/FavoritesBtn";
import ContextMenu from "../InteractiveMenu/ContextMenu";
import useModal from "../../../../../hooks/useModal";
import useContextMenu from "../../../../../hooks/useContextMenu";
import {useLayoutEffect} from "react";
import ThemodalEmbedPlaylist from "../../../../The modalEmbedPlaylist/ThemodalEmbedPlaylist";
import TheModalRecommendation from "../../../../BaseModal/TheModalRecommendation";
import PlaylistContextMenu from "../../PlaylistContextMenu";
import useFocusStyleMusic from "../../../../../hooks/useFocusStyleMusic";
import {PlayIcon} from "@heroicons/react/24/solid";
import PlayBtn from "../../../../PlayButton/PlayBtn";



function Music({track, id, toggleScrolling, showToast,showPopover}){
    const recommendationModal = useModal();
    const embedModal = useModal()
    const {
        isOpen : isOpenMenu,
        open :openMenu,
        ref:menuRef,
        close: closeMenu
    } = useContextMenu(toggleScrolling)
    useLayoutEffect(() => toggleScrolling(!isOpenMenu));

// добавление песни в избанное
    const [isFavorites, setFavorite] = useState(false);
    const addToFavoritesBar = ()=>{
        setFavorite(!isFavorites)
    }

// хук для изменения фона при наведении и при клике
    const {handleCurrent,
        enterCurrent,
        leaveCurrent,
        isCurrentFocus,
        classesCurrent,
        isHover,
        ref} = useFocusStyleMusic();


    //условия при кторорых видны кнопки избраного контекста и плеера

    const showFavoriteBtn = isCurrentFocus || isHover || isFavorites;
    const showOtherBtn = isCurrentFocus || isHover;


    return(
        <div ref={ref} onClick={handleCurrent} onMouseEnter={enterCurrent} onMouseLeave={leaveCurrent} className={`grid grid-cols-music h-[56px] rounded px-16 ${classesCurrent}`}>
            <div className='flex items-center gap-5'>
                <span className='w-5 h-5'>
                    {
                        showOtherBtn ? <PlayBtn/> : id + 1
                    }

                </span>

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
                {
                    showFavoriteBtn &&  <FavoritesBtn addToFavoritesBar={addToFavoritesBar} showToast={showToast} size={'w-5 h-5'}/>
                }

                    <span className={'ml-10 mr-2'}>
                        3:21
                    </span>
                {
                    showOtherBtn && <div className={'absolute -right-8 w-8 h-8'}>
                        <ContextMenu openMenu={openMenu}/>
                    </div>
                }


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
//hover:bg-neutral-600/70