import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export function AddToCartButton(props){
    const {userDispatch} = useContext(UserContext);
    return(
        <button onClick={()=>userDispatch({type : 'addToCart' , toCart: props.product.name})}>ADDtoCart</button>
    );
};