import React, {useState} from "react";
import {EllipsisHorizontalIcon} from "@heroicons/react/24/outline";
import BaseHelper from "../../../../BaseHelper/BaseHelper";
import useContextHelper from "../../../../../hooks/useContextHelper";
import {connect} from "react-redux";
import {setCurrentPlaylist} from "../../../../Redux/basePlaylist";



function ContextMenu({openMenu,playlists}){
    const {
        startOpenHelperMenu,
        closeHelperMenu,
        isHelperOpen,
        ref: menuRef
    } = useContextHelper();
    console.log(menuRef)





    return(
        <button onClick={e=>{
            closeHelperMenu()
            openMenu(e)
        }} onMouseEnter={startOpenHelperMenu} onMouseLeave={closeHelperMenu} className="relative hover:text-white ">
            <EllipsisHorizontalIcon className='w-8 h-8'/>
            {
                isHelperOpen && <BaseHelper ref={menuRef}>Открыть контектсное меню: {playlists.name}</BaseHelper>
            }
        </button>
    )
}


let mapStateToProps = (state)=>{
    return{
        playlists: state.homePagePlaylists.currentPlaylist
    }
}

export default connect(mapStateToProps, {})(ContextMenu);