


const initialState = {
    dataTracks:[],
    currentTrackID: '',
    nextTrackId: '',
    currentTrack:{
        // id: '',
        // img: '',
        // trackName:'',
        // artistName:'',
        // trackUrl: '',

    },
    statusPlayBtn: false,

}


const PlayingTrack = (state = initialState, action)=>{
    switch (action.type){
        case "SET_TRACK":{
            return {
                ...state,
                currentTrack: {id: state.currentTrackID, img: action.data.track.album.images[2].url, trackName: action.data.track.name, artistName: action.data.track.artists[0].name, trackUrl: action.data.track.preview_url}
            }
        }
        case "SET_TRACK_ID":{
            // const track = state.dataTracks.find((track, index) => index === action.id)
            return {
                ...state,
                currentTrackID: action.id,
                // currentTrack: {img: track.track.album.images[2].url, trackName: track.track.name, artistName: track.track.artists[0].name, trackUrl: track.track.preview_url}
            }

        }
        case "SET_NEXT_TRACK_ID":{
            return {
                ...state,
                nextTrackId: action.id + 1,
            }
        }
        case "CHANGE_STATUS_TO_PLAY":{
            return {
                ...state,
                statusPlayBtn: true
            }
        }
        case "CHANGE_STATUS_TO_PAUSE":{
            return {
                ...state,
                statusPlayBtn: false
            }
        }
        case "ADD_DATA_TRACKS":{
            // const track = state.dataTracks.find((track, index) => index === action.id)
            return {
                ...state,
                dataTracks: action.data,
                currentTrackID: action.id

            }
        }
        default: return state
    }
}

export const setTrack =(data)=>{
    return{
        type: "SET_TRACK",
        data
    }
}
export const setTrackId = (id)=>{
    return{
        type: "SET_TRACK_ID",
        id,
    }
}
export const setNexTrackId = (id)=>{
    return{
        type: "SET_NEXT_TRACK_ID",
        id
    }


}
export const changeStatusToPlay =()=>{
    return{
        type:"CHANGE_STATUS_TO_PLAY",

    }
}
export const changeStatusToPause =()=>{
    return{
        type:"CHANGE_STATUS_TO_PAUSE",

    }
}
export const addDataTracks = (data,id)=>{
    return{
        type: "ADD_DATA_TRACKS",
        data,
        id

    }
}
export default PlayingTrack