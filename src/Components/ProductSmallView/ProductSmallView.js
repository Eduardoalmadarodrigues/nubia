import {ProductWrapper , ProductImage, ProductName, ProductOldPrice, ProductNowPrice, PaymentWays} from './style';
import React from 'react';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

export function ProductSmallView(props){
    return (
        <ProductWrapper>
            <ProductImage src={props.product.image}></ProductImage>
            <ProductName>{props.product.name}</ProductName>
            <ProductOldPrice>R$ {props.product.oldPrice}</ProductOldPrice>
            <ProductNowPrice>R$ {props.product.price}</ProductNowPrice>
            <PaymentWays>à vista com Pix </PaymentWays>
            <AddToCartButton product={props.product}/>
        </ProductWrapper>
    );
}
