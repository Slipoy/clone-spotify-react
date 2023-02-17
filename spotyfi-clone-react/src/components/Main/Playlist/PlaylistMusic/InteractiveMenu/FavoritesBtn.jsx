import React from "react";
import {HeartIcon} from "@heroicons/react/24/outline";
import BaseHelper from "../../../../BaseHelper/BaseHelper";
import useContextHelper from "../../../../../hooks/useContextHelper";
import {useState} from "react";




function FavoritesBtn({size,showToast}){
    const {
        startOpenHelperMenu,
        closeHelperMenu,
        isHelperOpen,
        ref
    } = useContextHelper()
    const [classes, setClasses] = useState('')
    const addToFavorites = ()=> {
        if (classes === ""){
            setClasses("fill-green-500 text-green-500")
            showToast("Added to favorites")
        }else {
            setClasses('');
            showToast("Delete from favorites")
        }


    }
    return(
        <div onClick={()=>{
            closeHelperMenu()
            addToFavorites()
            showToast("test")

        }} onMouseEnter={startOpenHelperMenu} onMouseLeave={closeHelperMenu} className="relative hover:text-white">
            <HeartIcon className={`${size} ${classes}`}/>
            {
                isHelperOpen && <BaseHelper ref={ref}>Добавитьв очередь</BaseHelper>
            }
        </div>
    )
}



export default FavoritesBtn;