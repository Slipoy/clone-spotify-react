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

    ],



}

const homePagePlaylists = (state=initialState, action)=>{
    switch (action.type){
        case "SET_PLAYLISTS":{
            const data = action.data.map(item =>{
                return{
                    name: item.name,
                    description: item.description,
                    images: item.images[0].url,
                    spotifyUrl: item.id
                }
            })
            return {
                ...state,
                playlists: [...state.playlists, { title: "Spotify Playlists", data: data}]

            }
        }
        case "SET_CURRENT_PLAYLIST":{
            const data = {
                name: action.data.name,
                description : action.data.description,
                images : action.data.images[0].url,
                followers : action.data.followers.total,
                tracks: action.data.tracks.items,
                trackTotal: action.data.tracks.total
            }
            return {
                ...state,
                currentPlaylist: {...data}
            }
        }
        case "DELETE":{
            return state = initialState
        }

        default: return state
    }
}

export const setPlaylistSpotify = (data)=>{
    return{
        type: "SET_PLAYLISTS",
        data
    }
}
export const setCurrentPlaylist = (data)=>{
    return{
        type: "SET_CURRENT_PLAYLIST",
        data
    }
}
export const deletePlaylist = ()=>{
    return{
        type: 'DELETE'
    }
}



export default homePagePlaylists;