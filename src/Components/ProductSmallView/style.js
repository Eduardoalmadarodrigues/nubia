import styled from 'styled-components';

export const ProductWrapper = styled.div`
    width: 170px; 
   // border: 1px solid black ;
    border-radius: 5px;
    margin: 10px ; 
    display: flex;
    justify-content: center;
    align-items: left; 
    flex-direction: column;
    text-align: left;
`;

export const ProductImage = styled.img`
    width: 100%;
    border-radius: 5px 5px 0px 0px;

`;

export const ProductName = styled.h4`
    padding-left: 10px;
    color: white;
`;
export const ProductStars = styled.div`
    padding-left: 10px;
    color: white;
`;

export const ProductOldPrice = styled.span`
    color: gray;
    padding-left: 10px;
    font-size: small;
    text-decoration: line-through;
`;

export const ProductNowPrice = styled.span`
    color: white;
    padding-left: 10px;
    font-weight: bold;
    font-size: large;
`;

export const PaymentWays = styled.span`
    color: white;
    padding-left: 10px;
    font-size: small;
`;
