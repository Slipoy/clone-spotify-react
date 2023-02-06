import {focusData, playlistData} from "../../musicData";

const initialState = {
    playlists:[
        {
            title: "Фокус",
            data : focusData,
        },
        {
            title: 'Spotify Playlists',
            data : playlistData
        }

    ]

}

const homePagePlaylists = (state=initialState, action)=>{
    switch (action.type){
        case "SET_PLAYLIST":{
            const data = action.data.map(item =>{
                return{
                    name: item.name,
                    description: item.description,
                    images: item.images[0].url,
                    spotifyUrl: item.id
                }
            })
            console.log(data)
            return {
                ...state,
                playlists: [...state.playlists, { title: "Spotify Playlists", data: data}]

            }
        }
        default: return state
    }
}

export const setPlaylistSpotify = (data)=>{
    return{
        type: "SET_PLAYLIST",
        data
    }
}



export default homePagePlaylists;