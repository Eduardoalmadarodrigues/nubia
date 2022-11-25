import styled from 'styled-components';
import { ReactComponent as Icon } from "../../Assets/logo.svg";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: antiquewhite;
`

export const Header = styled.div`
    display: flex ;
    align-items: center ;
    width: 100vw ;
    height: 120px ;
    background-color: lightgrey;
`;

export const Logo = styled(Icon)`
width: 100px;
height: 100px ;
`

export const NavLink = styled.div`
    font-size: 25px;
    padding: 15px;
`;