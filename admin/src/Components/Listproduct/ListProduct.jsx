import React, { useEffect, useState } from "react";
import './Listproduct.css';
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
    const [allproducts, setallproducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproduct').then((res) => res.json()).then((data) => { setallproducts(data) });
    }
    useEffect(() => {
        fetchInfo();
    }, [])
    const remove_product=async(id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo (); 
    }
    return (
        <div className="List-product">
            <h1>All Product List</h1>
            <div className="listproduct-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Old_price</p>
                <p>New_price</p>
                <p>category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproduct">
                <hr />
                {allproducts.map((product) => {
                    return <div key={product.id}>
                        <div  className="listproduct-format-main list-product-format">
                            <img src={product.image} alt="" className="listProduct-product-icon" />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
                        </div>
                        <hr />  
                    </div>
                })}
            </div>
        </div>
    )
}
export default ListProduct