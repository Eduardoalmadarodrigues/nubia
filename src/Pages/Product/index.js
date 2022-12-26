import React  from 'react';
import Header from '../../Components/Header';
import { Wrapper , ProductWrapper , ProductImage , ProductName, ProductOldPrice, ProductNowPrice, PaymentWays } from './style';
import { useLocation } from 'react-router-dom';
import { AddToCartButton } from '../../Components/AddToCartButton/AddToCartButton';

export default function Product() {    
    const { state } = useLocation();
    return (
       <Wrapper>
        <Header/>
        <ProductWrapper>
            <ProductImage src={state.src.image}/>   
            <ProductName>{state.src.name}</ProductName>
            <ProductOldPrice>R$ {state.src.oldPrice}</ProductOldPrice>
            <ProductNowPrice>R$ {state.src.price}</ProductNowPrice>
            <PaymentWays>à vista com Pix </PaymentWays>
            <AddToCartButton product={state.src.id}/>
        </ProductWrapper>
       </Wrapper>    
    )
}