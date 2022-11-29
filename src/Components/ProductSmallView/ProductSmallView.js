import {ProductWrapper , ProductImage, ProductName} from './style';
import React from 'react';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

export function ProductSmallView(props){
    return (
          <ProductWrapper>
            <ProductName>{props.product.name}</ProductName>
        <ProductImage src={props.product.image}></ProductImage>
        <AddToCartButton product={props.product}/>
    </ProductWrapper>
    );
}