import React from "react";



const PlaylistCover=({url})=>{
    return(
        <img src={url} alt="photo"
             className="rounded shadow-lg"/>
    )
}
export default PlaylistCover