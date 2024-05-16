import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const ShopContext = createContext({
  getTotalCartitems: () => {},
  getTotalCartAmount: () => {},
  all_product: [],
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (item) => {},
  togglePlaceOrer: () => {},
  placeOrder: false,
});

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/allproduct")
      .then((response) => response.json())
      .then((data) => setAll_Product(data));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-Data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-Data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemID: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartitems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const placeOrder = async () => {
    var decoded = jwtDecode(localStorage.getItem("auth-token"));
    let userId = decoded.user.id;
    let cartProducts = [];

    console.log(userId);
    console.log("Cart Items", cartProducts);
    
    all_product.map((e) => {
      if (cartItems[e.id] > 0) {
        cartProducts.push(e);
      }
    });

    cartProducts = cartProducts.map(o=>(
        {
            productId : o._id,
            quantity : o.id
        }
    ));

     let order = {
        "userId": userId,
        "products":cartProducts,
        "paymentMethod": "Cash on Delivery",
        "shippingAddress": "-"
    }

    try {
      const response = await fetch("http://localhost:4000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const data = await response.json();
      alert("Order placed successfully:");
    } catch (error) {
      console.error("Error placing order:", error.message);
    }

  };

  const ContextValue = {
    getTotalCartitems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    placeOrder,
  };
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
