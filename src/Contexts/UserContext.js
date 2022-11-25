import React , {createContext, useReducer} from 'react';
import { initialState , reducer } from '../Reducers/UserReducer';

export const UserContext = createContext();

export const UserContextWrapper =  ({children}) => {
    const [state , dispatch] = useReducer(reducer, initialState)
    return(
        <UserContext.Provider value={{state,dispatch}}>
            {children}
        </UserContext.Provider>
    );
}