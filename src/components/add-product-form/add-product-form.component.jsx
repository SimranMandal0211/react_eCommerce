import './add-product-form.styles.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import { addProduct } from '../../store/products/product.action';
import { selectProductsArray } from "../../store/products/product.selector";

export default function AddProductForm(){
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const products = useSelector(selectProductsArray);

    const handleAddProduct = () => {
        const newProduct = {
            title,
            description,
            price: Number(price),
            rating: Number(rating),
            images: [image],
            id: Date.now(),
        };

        navigate('/allProds');
        dispatch(addProduct(products, newProduct));
    };



    return (
        <div className="form-container">
            <div className="add_prod_title">Add Product</div>
            <input 
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input 
                type='text'
                placeholder='Price'
                value={description}
                onChange={(e) => setdescription(e.target.value)}
            />

            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <input
                type="text"
                placeholder="Image Url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <button className='add-prod-button' onClick={handleAddProduct}>Add Product</button>
        </div>
    );
}