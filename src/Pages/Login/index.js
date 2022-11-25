import React , {useContext, useState} from 'react';
import { EmailInput, FormWrapper, PasswordInput, SubmitButton, Wrapper } from './style';
import {Link} from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

export default function Login(){
    const value = useContext(UserContext);
    const {state , dispatch} = value;
    const [emailInput, changeEmailInput] = useState('');
    return (
    <Wrapper>
        <FormWrapper>
            <EmailInput value={emailInput} onChange={(e)=>{
                changeEmailInput(e.target.value);
            }} placeholder="Email"/>
            <PasswordInput placeholder="Senha"/>
            <SubmitButton onClick={()=>{console.log(state);dispatch({type:'changeUser',text:emailInput});console.log(state)}}>Entrar</SubmitButton>
            <Link to='/'>Loja</Link>
        </FormWrapper>        
    </Wrapper>  
    )
}