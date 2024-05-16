import React, { useState } from "react";
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg'
const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [ProductDetails, setProducctDetails] = useState({
        name: "",
        image: "",
        category: "Coffee",
        new_price: "",
        old_price: ""

    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const changehandler = (e) => {
        setProducctDetails({ ...ProductDetails, [e.target.name]: e.target.value })
    }

    const Add_product = async () => {
        console.log(ProductDetails);
        let responceData;
        let Product = ProductDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            header: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responceData = data })
        if (responceData.success) {
            Product.image = responceData.image_url;
            console.log(Product)
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Product),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added") : alert("Failed")
            })
        }
        else {
            console.log("image is not updated")
        }
    }
    return (
        <div className="add-product">
            <div className="addproduct-itemfiled">
                <p>Product title</p>
                <input value={ProductDetails.name} onChange={changehandler} type="text" name="name" placeholder="Type here" id="" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfiled">
                    <p>Price</p>
                    <input value={ProductDetails.old_price} onChange={changehandler} type="text" name="old_price" placeholder="Type here" />
                </div>
                <div className="addproduct-itemfiled">
                    <p>Offer Price</p>
                    <input value={ProductDetails.new_price} onChange={changehandler} type="text" name="new_price" placeholder="Type here" />
                </div>
            </div>
            <div className="addproduct-itemfiled">
                <p>Product Category</p>
                <select value={ProductDetails.category} onChange={changehandler} name="category" className="add-product-selector">
                    <option value="Coffee">Coffee</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Desert">Desert</option>
                </select>
            </div>
            <div className="addproduct-itemfiled">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-tumnail-img" alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <button onClick={() => { Add_product() }} className="addproduct-btn">ADD</button>
        </div>
    )
}
export default AddProduct