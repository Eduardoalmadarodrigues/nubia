import React from 'react';
import { EmailInput, FormWrapper, PasswordInput, SubmitButton, Wrapper } from './style';
import {Link} from 'react-router-dom';

export default ()=> {
    return (
    <Wrapper>
        <FormWrapper>
            <EmailInput placeholder="Email"/>
            <PasswordInput placeholder="Senha"/>
            <SubmitButton>Entrar</SubmitButton>
            <Link to='/'>Loja</Link>
        </FormWrapper>        
    </Wrapper>  
    )
}