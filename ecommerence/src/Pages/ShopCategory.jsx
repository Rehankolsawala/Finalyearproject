import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assests/nav-dropdown_icon.png";
import Item from "../Components/Item/Item";

const Shopcategory = (props) => {
    const { all_product } = useContext(ShopContext);
    console.log('props',props)
    console.log('all products in shop',all_product);
    return (
        <div className="shop-category">
            <img className="shop-category-banner" src={props.banner} alt="" />
            <div className="category-indexSort">
                <p>
                    <span>
                        Showing1-12
                    </span>out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopCategory-Product">
                {all_product?.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
            Explore Mores
            </div>
        </div>
    )
}
export default Shopcategory