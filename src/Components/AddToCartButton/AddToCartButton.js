import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { AddButton } from './style'

export function AddToCartButton(props){
    const {userDispatch} = useContext(UserContext);
    return(
        <AddButton onClick={()=>userDispatch({type : 'addToCart' , toCart: props.product.name})}>ADDtoCart</AddButton>
    );
};