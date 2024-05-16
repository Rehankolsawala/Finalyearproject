import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/Productdisplay";
import DecriptionBox from '../Components/DecripitionBox/DecripitionBox';
import RelatedProduct from '../Components/RelatedProduct/relatedProduct'
const product = () => {
    const { all_product } = useContext(ShopContext);
    const {productID } = useParams();
    const product = all_product.find((e) => e.id === Number(productID))
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay  product={product} />
            <DecriptionBox/>
            <RelatedProduct/>
        </div>
    )
};
export default product