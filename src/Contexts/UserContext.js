import React , {createContext, useReducer} from 'react';
import { initialState , reducer } from '../Reducers/UserReducer';

const UserContext = createContext();

export default ({children}) => {
    const [state , dispatch] = useReducer(reducer, initialState)
    return(
        <UserContext.Provider value={{state,dispatch}}>
            {children}
        </UserContext.Provider>
    );
}