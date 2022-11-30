import styled from 'styled-components';
import { ReactComponent as Icon } from "../../Assets/logo.svg";
import { ReactComponent as Menu } from "../../Assets/menu_buttom.svg";
import { ReactComponent as Home } from "../../Assets/home.svg";
import { ReactComponent as User } from "../../Assets/user.svg";

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

export const MenuButton = styled(Menu)`
    padding: 30px;
    width: 40px;
    height: 40px ;
    `;
export const HomeButtom = styled(Home)`
    width: 30px;
    height: 25px;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: medium;
    padding: 3px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0 0 0px;
    align-self: flex-start;
`;
 
export const UserButtom = styled(User)`
    width: 30px;
    height: 25px;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: medium;
    padding: 3px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0 0 0px;
    align-self: flex-start;
`;
