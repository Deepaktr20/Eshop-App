import "./Product.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "./store";

function Product({id,title,price,image,rating}){
    const dispatch=useDispatch();
 
    const AddToBasket=()=>{
        dispatch(addToBasket({id,title,image,price,rating}))
    }
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={AddToBasket}>Add to Basket</button>
        </div>
    )
}
export default Product;