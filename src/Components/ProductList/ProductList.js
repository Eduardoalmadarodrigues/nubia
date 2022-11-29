import React from 'react';
import {ProductListWrapper} from './style';


export function ProductList(props){
    if(props.isVisible)return (
        <ProductListWrapper>
        {
            props.products.map((product, index)=>{
               return <p key={index}>{product.name}</p>
            })
        }
        </ProductListWrapper>
    );
}