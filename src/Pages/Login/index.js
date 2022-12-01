import React , {useContext, useState} from 'react';
import { EmailInput, FormWrapper, PasswordInput, SubmitButton, Wrapper, Logo } from './style';
import { UserContext } from '../../Contexts/UserContext';
import {Link} from 'react-router-dom'

export default function Login(){
    const { userDispatch } = useContext(UserContext);
    const [emailInput, changeEmailInput] = useState('');

    return (
    <Wrapper>
        <FormWrapper>
            <Logo/>
            <h2 style={{color:'white'}}>Login</h2>
            <EmailInput value={emailInput} onChange={(e)=>{
                changeEmailInput(e.target.value);
            }} placeholder="Email"/>
            <PasswordInput placeholder="Senha"/>
            <Link to="/"><SubmitButton onClick={()=>{userDispatch({type:'changeUser',text:emailInput});}}>ENTRAR</SubmitButton></Link>
        </FormWrapper>        
    </Wrapper> 
    )
}
