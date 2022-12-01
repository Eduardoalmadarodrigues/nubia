import React, { useContext, useState, useEffect } from "react";
import { Wrapper, Header, Logo, NavLink, ProductsWrapper, SearchInput,UserButtom, HomeButtom, MenuButton, CartButtom } from "./style";
import { UserContext } from "../../Contexts/UserContext";
import { ProductList } from "../../Components/ProductList/ProductList";
import { Link } from "react-router-dom";
import { ProductSmallView } from "../../Components/ProductSmallView/ProductSmallView";

export default function Loja() {
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

  return (
    <Wrapper>
      <Header>
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
          <CartButtom/>
         </Link>
      </Header>
      <SearchInput/>
      <ProductsWrapper>
        { (listaProdutos) ? listaProdutos.map((product, index) => (
          <ProductSmallView product={product} key={index} />
        )) : <></> }
      </ProductsWrapper>
    </Wrapper>
  );
}


