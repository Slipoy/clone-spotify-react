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
import useClickAway from "../../../../../hooks/useClickAway";
import {useEffect, useRef} from "react";
import MainInfoTrack from "../../../../MainInfoTrack/MainInfoTrack";
import {
    addDataTracks,
    changeStatusToPause,
    changeStatusToPlay,
    setNexTrackId,
    setTrack, setTrackId
} from "../../../../Redux/PlayingTrack";
import playlist from "../../Playlist";



function Music({track, id, toggleScrolling, showToast,showPopover,addDataTracks,playingStatus,changeStatusToPlay,changeStatusToPause,playlists,currentTrack,currentTrackID}){
    // console.log(currentTrack)
    // console.log(currentTrackID)


    const preview = track.preview_url
    let startClasses = ''
    if (preview === null){
        startClasses = 'opacity-50'
    }


    // для котексного меню
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
        ref} = useFocusStyleMusic(preview);

// состояние для кнопки плей
    const [isPlaying, setIsPlaying] = useState(false);
    function test (){
        if (!playingStatus){
            changeStatusToPlay();
        }else changeStatusToPause();
    }

    const handleClick = ()=>{
        console.log("это клик по кнопке ")
        if (!isPlaying){
            addDataTracks(playlists.tracks, id);
        }
        setIsPlaying(!isPlaying);
        test()

    }

    useClickAway(handleCurrent,ref, false);

    useEffect(()=>{
        if (currentTrack.trackName === track.name){
            setIsPlaying(true)
        }else setIsPlaying(false)

    },[currentTrack,playingStatus])


    //условия при кторорых видны кнопки избраного, контекста и плеера

    const showFavoriteBtn = isCurrentFocus || isHover || isFavorites;
    const showOtherBtn = isCurrentFocus || isHover || isPlaying;






    return(
        <div ref={ref} onClick={handleCurrent} onMouseEnter={enterCurrent} onMouseLeave={leaveCurrent} className={`grid grid-cols-music h-[56px] rounded px-16 ${startClasses} ${classesCurrent}`}>
            <div className='flex items-center gap-5'>
                <span className='w-5 h-5'>
                    {
                        showOtherBtn ? <PlayBtn setIsPlaying={setIsPlaying} id={id} isPlaying={isPlaying} handleClick={handleClick} /> : id + 1
                    }

                </span>
                <MainInfoTrack isE imgClasses={'w-[40px] h-[40px]'} trackImg={track.album.images[2].url} trackName={track.name} artistName={track.artists[0].name}/>
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
        playlists: state.homePagePlaylists.currentPlaylist,
        currentTrack: state.PlayingTrack.currentTrack,
        playingStatus: state.PlayingTrack.statusPlayBtn,
        currentTrackID: state.PlayingTrack.currentTrackID,
    }
}

export default connect(mapStateToProps, {setTrackId,changeStatusToPlay,changeStatusToPause,addDataTracks,setNexTrackId})(Music);
//hover:bg-neutral-600/70