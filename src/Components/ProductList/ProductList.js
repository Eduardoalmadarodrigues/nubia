import React , {useContext}from 'react';
import { UserContext } from '../../Contexts/UserContext';
import {ProductListWrapper} from './style';


export function ProductList(props){
    const { userDispatch } = useContext(UserContext);
    if(props.isVisible)return (
        <ProductListWrapper>
        {
            props.products.map((product, index)=>{
               return <p key={index} onClick={()=>userDispatch({type : 'addToCart' , toCart: product.name})}>{product.name}</p>
            })
        }
        </ProductListWrapper>
    );
}