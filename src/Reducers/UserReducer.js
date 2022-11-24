export const initialState = {
    user: ''
}

export function reducer(state , action){
    switch(action){
        case 'changeUser':
            return {...state, user: action.user}
            break;
        default: return state;
    }
}