import React from 'react';
import {Wrapper} from './style';
import {Link} from 'react-router-dom';

export default ()=> {
    return (
    <Wrapper>
        <Link to='/login'>Login</Link>
    </Wrapper>
    )
}