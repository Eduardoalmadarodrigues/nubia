import {ProductWrapper , ProductImage, ProductName, ProductOldPrice, ProductNowPrice, PaymentWays} from './style';
import React from 'react';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { Link } from 'react-router-dom';

export function ProductSmallView(props){
    return (
        <ProductWrapper>
            <Link to='product'  state={{src: props.product}} >
            <ProductImage src={props.product.image} ></ProductImage>
            </Link>            
            <ProductName>{props.product.name}</ProductName>
            <ProductOldPrice>R$ {props.product.oldPrice}</ProductOldPrice>
            <ProductNowPrice>R$ {props.product.price}</ProductNowPrice>
            <PaymentWays>à vista com Pix </PaymentWays>
            <AddToCartButton product={props.product}/>
        </ProductWrapper>
    );
}
