import React, { useContext,useState,useEffect } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_Icon from "../Assests/cart_cross_icon.png";

const Carditems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart,placeOrder} =
    useContext(ShopContext);

  return (
    <div className="cartitem">
      <div className="carditem-format-main">
        <p>Product</p>
        <p>title</p>
        <p>Prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="carditems-format carditem-format-main">
                <img src={e.image} alt="" className="cardicon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="carditems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitem-remove-icon"
                  src={remove_Icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={()=>placeOrder()}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code,Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carditems;
