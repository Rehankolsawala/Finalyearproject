import React from "react";
import './Order.css'
import { useContext } from "react";
import { OrderContext } from "../../../../ecommerence/src/Context/OrderContext";
const Order = ({order}) => {
    const {  placeOrder } = useContext(OrderContext);
    console.log( "placeOrderState", placeOrder,order);
    return (
        <div>
            order
        </div>
    )
}
export default Order