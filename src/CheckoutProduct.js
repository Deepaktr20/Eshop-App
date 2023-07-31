import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "./store";

function CheckoutProduct({id,title,image,price,rating}){
    const dispatch=useDispatch();
    const RemoveFromBasket=(id)=>{
        dispatch(removeFromBasket(id))
    }
    return(
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct_image"></img>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={()=>RemoveFromBasket(id)}>Remove from Basket</button>
            </div>
        </div>
    )
}
export default CheckoutProduct;