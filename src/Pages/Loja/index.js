import React, {  useState, useEffect } from "react";
import { Wrapper, ProductsWrapper } from "./style";
import { ProductSmallView } from "../../Components/ProductSmallView/ProductSmallView";
import Header from "../../Components/Header";

export default function Loja() {
  const [listaProdutos, setListaProdutos] = useState([{}]);

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
      <Header/>
      <ProductsWrapper>
        { (listaProdutos) ? listaProdutos.map((product, index) => (
          <ProductSmallView product={product} key={index} />
        )) : <></> }
      </ProductsWrapper>
    </Wrapper>
  );
}


