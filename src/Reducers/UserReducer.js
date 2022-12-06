export const initialState = {
    user: '',
    carrinho: []
}

export function reducer(state , action){
    switch(action.type){
        case 'changeUser':
            return {...state, user: action.text};
        case 'addToCart':
            return {...state, carrinho: state.carrinho.concat(action.toCart)};
        case 'removeFromCart':
            const carrinho2 = state.carrinho;
            carrinho2.splice(action.index.index , 1);            
            return {...state , carrinho: carrinho2 };
        case 'reset':
            return {
                user: state.user,
                carrinho: []
            };
        case 'logOut':
            return {
                user: '',
                carrinho: []
            };
        default: return {...state};
    }
}