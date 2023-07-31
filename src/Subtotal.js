import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";

function Subtotal(){
    const basket=useSelector((state)=>{
        return state.products.basket;
    })
    return(
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${basket?.reduce((amount,item)=>item.price+amount,0)}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType="text"
                thousandSeparator={true}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}
export default Subtotal;