const SET_TOKEN = 'SET_TOKEN';



const initialState = {
    isAuth :false,
    token: ''

}

const authorization= (state= initialState, action)=>{
    switch (action.type){
        case SET_TOKEN:{
            return {
                ...state,
                token: action.token,
                isAuth: !state.isAuth,
            }
        }
        case 'DELETE_TOKEN':{

            return {
                ...state,
                isAuth: !state.isAuth,
                token: ''
            }
        }
        default: return state
    }

}

export const setToken = (token)=>{
    return{
        type :SET_TOKEN,
        token
    }
}
export const deleteToken = ()=>{
    return{
        type: "DELETE_TOKEN"

    }
}
export default authorization;