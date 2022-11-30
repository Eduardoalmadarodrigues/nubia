import styled from 'styled-components';
import { ReactComponent as Icon } from "../../Assets/logo.svg";

export const Wrapper = styled.div`
    width: 100%;
    background-color: #161b22; 
`

export const Header = styled.div`
    display: flex ;
    align-items: center ;
    width: 100% ;
    height: 120px ;
    background-color: #0d1117;
`;

export const Logo = styled(Icon)`
width: 100px;
height: 100px ;
`

export const NavLink = styled.div`
    font-size: 25px;
    padding: 15px;
`;

export const ProductsWrapper = styled.div`
    max-width: 100%;
    display: flex;
    overflow: auto;
    flex-wrap: wrap ;
    justify-content: center ;
`;
