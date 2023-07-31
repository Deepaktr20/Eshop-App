import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";

function Checkout(){
    const checkout=useSelector((state)=>{
        return state.products.basket;
    })
    return(
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad"></img>
                <div>
                    <h2 className="checkout_title"> Your Shopping Basket</h2>
                    {checkout.map((item)=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout;