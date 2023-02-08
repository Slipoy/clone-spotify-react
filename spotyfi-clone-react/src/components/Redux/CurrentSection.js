


const initialState = {
    currentSection : []

}

const CurrentSection = (state = initialState, action)=>{
    switch (action.type){
        case "SET_SECTION_DATA":{
            return {
                ...state,
                currentSection: action.data
            }
        }

        default: return state
    }
}


export const setCurrentSection = (data)=>{
    return{
        type: "SET_SECTION_DATA",
        data
    }
}

export default CurrentSection;



