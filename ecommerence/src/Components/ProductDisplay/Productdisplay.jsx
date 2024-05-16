import React, { useContext } from "react";
import './ProductDisplay.css';
import Star_icon from '../Assests/star_icon.png'
import Star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const{addToCart}=useContext(ShopContext)
    return (
        <div className="ProductDisplay">
            <div className="ProductDisplay-left">
                <div className="product-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="Product-Display-img">
                    <img className="Productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={Star_icon} alt="" />
                    <img src={Star_icon} alt="" />
                    <img src={Star_icon} alt="" />
                    <img src={Star_icon} alt="" />
                    <img src={Star_icon} alt="" />
                    <img src={Star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-righr-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam sapiente rerum at dolor nisi esse hic similique.
                    Quae totam.
                </div>
                <div className="productdisplay-right-size">
                    <h1>select size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>Small</div>
                        <div>Medium</div>
                        <div>Large</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>
                    Add to Cart
                </button>
                <p className="productdisplay-right-category"><span>Category:</span>Women,T-Shirt,crop top</p>
                <p className="productdisplay-right-category"><span>Tags:</span>modren,Latest</p>
            </div>
        </div>
    )
}
export default ProductDisplay