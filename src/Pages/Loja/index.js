import React , { useContext , useState } from 'react';
import {Wrapper,Header,Logo, NavLink , ProductsWrapper} from './style';
import { UserContext } from '../../Contexts/UserContext';
import { ProductList } from '../../Components/ProductList/ProductList';
import {api} from '../../api';
import { Link } from 'react-router-dom';
import {ProductSmallView} from '../../Components/ProductSmallView/ProductSmallView'

export default function Loja() {
    const { userState , userDispatch } = useContext(UserContext);
    const [listaProdutos] = useState(api);
    const [productsListVisibility, setProductsListVisibility] = useState(false);
    return (
    <Wrapper>
        <Header>
            <Logo/>
            <NavLink onMouseLeave={()=>setProductsListVisibility(false)} onMouseEnter={()=>setProductsListVisibility(true)}>Products<ProductList onMouseLeave={()=>setProductsListVisibility(false)}  isVisible={productsListVisibility} products={listaProdutos}></ProductList></NavLink>
            <Link to='/'><NavLink>HOME</NavLink></Link>
            <Link to='/login'><NavLink>Login</NavLink></Link>
            <h1>{userState.user}</h1>
            <div>{userState.carrinho}</div>
            <button onClick={()=>userDispatch({type:'reset'})}>Reset</button>
            <Link to='/login'><button onClick={()=>userDispatch({type:'logOut'})}>LogOut</button></Link>
            <p>carrinho: {userState.carrinho.length}</p>
        </Header>
        <ProductsWrapper>
        {listaProdutos.map((product , index)=><ProductSmallView product={product} key={index}/>)} 
        </ProductsWrapper>       
    </Wrapper>
    )
}