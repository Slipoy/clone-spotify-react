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
import {NavLink} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {setToken} from "../../Redux/authorization";
import {setCurrentSection} from "../../Redux/CurrentSection";
import {setCurrentPlaylist} from "../../Redux/basePlaylist";








const Playlist = ({titleNone, spotifyUrl,images, name, description, classes, music, toggleScrolling,showToast,showPopover,token,setCurrentPlaylist})=>{


    if (titleNone) classes = ''
    const recommendationModal = useModal();
    const embedModal = useModal()

    const {
        isOpen : isOpenMenu,
        open :openMenu,
        ref:menuRef,
        close: closeMenu
    } = useMenu(toggleScrolling)
    console.log(menuRef)


    useLayoutEffect(() => toggleScrolling(!isOpenMenu))
    const bgClasses = isOpenMenu ? "bg-[#272727]" :"bg-[#181818] hover:bg-[#272727]"

    const test = document.querySelector("nav a:nth-child(4)")



    return (
        <>
            <NavLink to={"/clone-spotify-react/playlist/" + spotifyUrl}

               className={`relative p-4 rounded-mb  duration-200 group ${classes} ${bgClasses}`}
               onContextMenu={openMenu} >
                <div className="relative">
                    <PlaylistCover url={images}/>
                    <PlaylistBtn/>
                </div>
                <PlaylistTitle title={name}/>
                <PlaylistDescription description={description}/>
                {
                    isOpenMenu && <PlaylistContextMenu openEmbedModal={embedModal.open} openRecomModal={recommendationModal.open} isOpenMenu={isOpenMenu} showPopover={showPopover} closeMenu={closeMenu} ref={menuRef} showToast={showToast}/>
                }

            </NavLink>
            {
                recommendationModal.isOpen && <TheModalRecommendation onClose={recommendationModal.close}/>
            }
            {
                embedModal.isOpen && <ThemodalEmbedPlaylist spotifyUrl={`playlist/${spotifyUrl}`} onClose={embedModal.close}/>
            }



        </>

    )
}
let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token
    }
}

export default connect(mapStateToProps, {setToken,setCurrentPlaylist})(Playlist);