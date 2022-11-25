import React from 'react';
import {Wrapper,Header,Logo, NavLink} from './style';
import {Link} from 'react-router-dom';


export default function Loja() {
    return (
    <Wrapper>
        <Header>
            <Logo/>
            <NavLink onClick={()=>{window.location.href = '/'}}>HOME</NavLink>
            <NavLink onClick={()=>{window.location.href = '/login'}}>Login</NavLink>
            <NavLink>HOME</NavLink>
            <NavLink>HOME</NavLink>
        </Header>
        <Link to='/login'>Login</Link>
    </Wrapper>
    )
}