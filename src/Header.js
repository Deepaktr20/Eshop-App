import "./Header.css";
import { useState } from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header(){
    const[item,setItem]=useState('');
    const checked=useSelector((state)=>{
        return state.products.basket;
    })
    return(
        <div className="header">
            <Link to="/" style={{textDecoration:"none"}}>
            <div className="header_logo">
                <StorefrontIcon className='header_logoImage' fontSize='large'/>
                <h2 className='header_logoTitle'>eShop</h2>
            </div>
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" value={item} onChange={e=>setItem(e.target.value)}/>
                <SearchIcon className='header_searchIcon'/>
            </div>
            <div className="header_nav">
                <Link to="/login" style={{textDecoration:"none"}}>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <span className="nav_itemLineTwo">Sign In</span>
                 </div>
                </Link>
                 <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{textDecoration:"none"}}>
                    <div className="nav_itemBasket">
                        <ShoppingBasketIcon/>
                        <span className="nav_basketCount">{checked.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;