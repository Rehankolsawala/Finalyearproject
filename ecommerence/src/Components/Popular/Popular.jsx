import React, { useEffect, useState } from "react";
import './Popular.css'
import Item from '../Item/Item'

const popular = () => {
    const [popularProducts, setPopularproducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/Popularsection')
        .then((response)=>response.json())
        .then((data)=>setPopularproducts(data));
    },[])

    return (
        <div className="popular">
            <h1>Teen'S pecial</h1>
            <hr />

            <div className="popular-item">
                {popularProducts.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}</div>
        </div>
    )
}

export default popular;