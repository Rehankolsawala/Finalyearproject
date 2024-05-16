import React,{useState,useEffect} from "react";
import './Order.css'
import { useContext } from "react";
import { OrderContext } from "../../../../ecommerence/src/Context/OrderContext";
const Order = ({order}) => {
    const {  placeOrder } = useContext(OrderContext);
    console.log( "placeOrderState", placeOrder,order);

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        await fetch('http://localhost:4000/orders').then((res) => res.json()).then((data) => { setOrders(data) });
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return (
        <div className="List-product">
        <h1>All Orders</h1>
        <div className="listproduct-format-main">
            <p>Product Name</p>
            <p>Image</p>
            <p>Order Status</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Ordered By</p>
        </div>
        <div className="listproduct-allproduct">
            <hr />
            {orders.map((order) => {
                return <div key={order.id}>
                    <div  className="listproduct-format-main list-product-format">
                        <p>{order.products[0].product.name}</p>
                        <img src={order.products[0].product.image} alt="" className="listProduct-product-icon" />
                        <p>{order.status}</p>
                        <p>{order.products[0].quantity}</p>
                        <p>{order.totalPrice}</p>
                        <p>{order.user.name}</p>
                    </div>
                    <hr />  
                </div>
            })}
        </div>
    </div>
    )
}
export default Order