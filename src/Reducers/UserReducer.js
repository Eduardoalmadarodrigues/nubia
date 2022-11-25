export const initialState = {
    user: 'asd'
}

export function reducer(state , action){
    switch(action.type){
        case 'changeUser':
            return {...state, user: action.text}
        default: return state;
    }
}