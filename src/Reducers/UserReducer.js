const storageUser = window.localStorage.getItem('user');

export const initialState = {
    user: storageUser ? storageUser : ''
}

export function reducer(state , action){
    switch(action.type){
        case 'changeUser':
            return {...state, user: action.text}
        default: return state;
    }
}