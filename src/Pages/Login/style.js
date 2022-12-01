import styled from 'styled-components';
import { ReactComponent as Icon } from "../../Assets/logo.svg";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0d1117;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #161b22;
`;

export const Logo = styled(Icon)`

    margin: 10px;
    width: 100px;
    height: 100px ;

`;

export const EmailInput = styled.input`
    width: 200px;
    height: 40px;
    margin: 10px;
    color: gray;
    font-size: large;
    background-color: #0d1117;
    border: 2px solid #f57a27;
    border-radius: 6px;
`;

export const PasswordInput = styled.input`
    width: 200px;
    height: 40px;
    margin: 10px;
    color: gray;
    font-size: large;
    background-color: #0d1117;
    border: 2px solid #f57a27;
    border-radius: 6px;
`

export const SubmitButton = styled.button`
    width: 150px;
    height: 40px;
    width: 100px;
    height: 50px;
    margin-top: 40px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #f57a27;
    font-size: medium;
    padding: 3px;

`;
