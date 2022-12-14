import styled from 'styled-components';
import { ReactComponent as Icon } from "../../Assets/logo.svg";
import { ReactComponent as Menu } from "../../Assets/menu_buttom.svg";
import { ReactComponent as Home } from "../../Assets/home.svg";
import { ReactComponent as User } from "../../Assets/user.svg";
import { ReactComponent as Cart } from "../../Assets/cart.svg";

export const Wrapper = styled.div`
        display: flex ;
    align-items: center ;
    justify-content: center;
    width: 100% ;
    height: 120px ;
    background-color: #0d1117; 
`

export const Logo = styled(Icon)`

    margin: 10px;
    width: 40px;
    height: 40px ;

`;

export const MenuButton = styled(Menu)`

    padding: 30px;
    width: 40px;
    height: 40px ;
    justify-content: start;
    align-items: start;
`;

export const NavLink = styled.div`  //COMMIT
    width: 60px;
    height: 20px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #f57a27;
    font-size: medium;
    padding: 3px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0 0 0px;
    margin: 20px;
`;

export const SearchInput = styled.input`
    width: 82%;
    height: 40px;
    margin: auto;
    margin-top: 10px;
    color: gray;
    font-size: large;
    background-color: #0d1117;
    border: 2px solid gray;
    border-radius: 6px;
    display: flex;
    overflow: auto;
    flex-wrap: column;
    align-items: center;
    justify-content: center ;
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

export const CartButtom = styled(Cart)` //COMMIT
    width: 30px;
    height: 25px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const CartButtomCounter = styled.div` //COMMIT
    position: absolute;
    top: -8px;
    right: -4px;
    user-select: none;
    background: yellow;
    text-align: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%; 
    font-size: 0.6rem;
`;

export const CartButtomContainer = styled.div` //COMMIT
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
