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
        default: return state
    }

}

export const setToken = (token)=>{
    return{
        type :SET_TOKEN,
        token
    }
}
export default authorization;