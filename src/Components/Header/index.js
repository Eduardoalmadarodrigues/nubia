import React, { useContext, useState, useEffect } from "react";
import { Wrapper, Logo, NavLink,UserButtom, HomeButtom, MenuButton, CartButtom, CartButtomContainer, CartButtomCounter } from "./style";
import { ProductList } from "../../Components/ProductList/ProductList";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";


export default function Header() {
    const { userState } = useContext(UserContext);
    const [listaProdutos, setListaProdutos] = useState([{}]);
    const [productsListVisibility, setProductsListVisibility] = useState(false);
  
    async function getListaProdutos() {
      const response = await fetch(
        "https://api-next-serverless.vercel.app/api/products",
        { method: "GET" }
      );
      const json = await response.json();
      return json;
    }
  
    useEffect(() => {
      getListaProdutos().then((data)=>setListaProdutos(data))
      
  }); 
return(
    <Wrapper>
<MenuButton/>
  <Logo />
  <NavLink
    onMouseLeave={() => setProductsListVisibility(false)}
    onMouseEnter={() => setProductsListVisibility(true)}
  >
    Products
    <ProductList
      onMouseLeave={() => setProductsListVisibility(false)}
      isVisible={productsListVisibility}
      products={listaProdutos}
    ></ProductList>
  </NavLink>
  <Link to="/">
    <HomeButtom/>
  </Link>
  <Link to="/login">
    <UserButtom/>
  </Link>
   <Link to="./carrinho">
    <CartButtomContainer>
      <CartButtom>
      </CartButtom>
      <CartButtomCounter>{userState.carrinho.length}</CartButtomCounter>
    </CartButtomContainer>
   </Link>
</Wrapper>
)


}