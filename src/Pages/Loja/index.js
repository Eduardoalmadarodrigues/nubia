import React , { useContext , useState } from 'react';
import {Wrapper,Header,Logo, NavLink} from './style';
import {Link} from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { ProductList } from '../../Components/ProductList/ProductList';


export default function Loja() {
    const { state } = useContext(UserContext);
    const [isVisible,setIsVisible] = useState(false)
    
    return (
    <Wrapper>
        <Header>
            <Logo/>
            <NavLink onClick={()=>{window.location.href = '/'}}>HOME</NavLink>
            <NavLink onMouseEnter={()=>setIsVisible(true)} onMouseOut={()=>setIsVisible(false)} onClick={()=>{window.location.href = '/login'}}>Login</NavLink>
            <NavLink>HOME</NavLink>
            <NavLink>HOME</NavLink>
            <h1>{state.user}</h1>
        </Header>
        <ProductList isVisible={isVisible} products={['agua','cachaça','drogas']}></ProductList>
        <button onClick={()=>{console.log(state.user)}}>log</button>
        <ProductList products={['agua','cachaça','drogas']}></ProductList>
        <Link to='/login'>Login</Link>
    </Wrapper>
    )
}