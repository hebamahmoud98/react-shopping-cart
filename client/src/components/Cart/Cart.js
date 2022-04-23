import React from "react";
import "../../css/Cart/Cart.css";
import Products from "../Products/Products";

function Cart(props) {
  return (
    <div className="cart-wrapper">
        <div className="cart-title">{props.cartItem.length === 0 ? "Empty Card" :
        <p>There is {props.cartItem.length} product in Cart</p>
        }</div>
<div className="cart-items">
   {props.cartItem.map(item => (
       
        <div className="cart-item" key={item.id}>
        <img src={item.imageUrl} alt=""></img>
        <div className="cart-info">
            <div>
                <p> TiTle: {item.title}</p>
                <p>qty:{item.qty}</p>
                <p> Price:{item.price}$</p>

            </div>
            <button onClick={()=>props.removeFormCart(item)} >
                Remove
            </button>
        </div>
    </div>
   )
   

   )}
</div>
    </div>
  )
}
export default Cart