import React from 'react';
import {ProductListWrapper} from './style'


export function ProductList(props){
    if(props.isVisible)return (
        <ProductListWrapper>
        {
            props.products.map((product)=>{
               return <div>{product}</div>
            })
        }
        </ProductListWrapper>
    );
}