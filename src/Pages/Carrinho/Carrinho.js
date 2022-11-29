import React , {useContext} from 'react';
import {Wrapper,ProductView} from './style';
import {UserContext} from '../../Contexts/UserContext';
import { Link } from 'react-router-dom'
export function Carrinho(){
    const {userState , userDispatch} = useContext(UserContext);
    return (
        <Wrapper>
            {(userState.carrinho) ? userState.carrinho.map((produto , index)=><ProductView>{produto}
            <button onClick={()=>userDispatch({type:'removeFromCart' , index:{index}})}>Remove</button>
            </ProductView>):<></>}
            <Link to="/">Retornar à Loja</Link>
        </Wrapper>
    )
}