import React , {createContext, useReducer} from 'react';
import { initialState , reducer } from '../Reducers/UserReducer';

export const UserContext = createContext();

export const UserContextWrapper =  ({children}) => {
    const [userState , userDispatch] = useReducer(reducer, initialState)
    return(
        <UserContext.Provider value={{userState,userDispatch}}>
            {children}
        </UserContext.Provider>
    );
}