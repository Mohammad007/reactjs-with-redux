
const initState = {
    users: "ReactJS"
}

export const userReducer = (state = initState, action) => {
    switch(action.type){
        case 'USERS':
            return state.users = action.payload
        default:
            return state
    }
}