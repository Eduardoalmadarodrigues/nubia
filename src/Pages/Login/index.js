import React , {useContext, useState} from 'react';
import { EmailInput, FormWrapper, PasswordInput, SubmitButton, Wrapper } from './style';
import {Link} from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

export default function Login(){
    const { state, dispatch } = useContext(UserContext);
    const [emailInput, changeEmailInput] = useState('');
    return (
    <Wrapper>
        <FormWrapper>
            <EmailInput value={emailInput} onChange={(e)=>{
                changeEmailInput(e.target.value);
            }} placeholder="Email"/>
            <PasswordInput placeholder="Senha"/>
            <SubmitButton onClick={()=>{dispatch({type:'changeUser',text:emailInput});window.localStorage.setItem('user',emailInput)}}>Cad</SubmitButton>
            <SubmitButton onClick={()=>{console.log(state.user)}}>log</SubmitButton>
            <SubmitButton onClick={()=>{window.location.assign('/');}}>Entrar</SubmitButton>
            <Link to='/'>Loja</Link>
        </FormWrapper>        
    </Wrapper> 
    )
}