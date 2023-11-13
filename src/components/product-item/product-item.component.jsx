import './product-item.styles.css';

// image
import tick from '../../assets/images/tick.png';
import cross from '../../assets/images/cross.png';
import edit from '../../assets/images/edit.png';
import delete from '../../assets/images/delete.png';
import cart from '../../assets/images/cart.png';

import ReactStars from "react-stars";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export default function ProductItem({ product }){
    const { title, price, images, rating, description, id  } = product;

    const dispatch = useDispatch();

    // For edit Cart Item
    const [beingEditied, setBeingEditied] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newPrice, setNewPrice] = useState(price);
    const [newRating, setNewRating] = useState(rating);
    const [newDescription, setNewDescription] = useState(description);

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handlePriceChange = (e) => {
        setNewPrice(e.target.value);
    }

    const handleRatingChange = (e) => {
        setNewRating(e.target.value);
    }

    const handleDescChange = (e) => {
        setNewDescription(e.target.value);
    }

    // 43




    return(
        <div className='product-card'>
            <div className="image-price-rating-container">
                <img src={images[0]} alt={title} onClick={handleShowDetails} />

                <div className="title-rating-price">
                    <div className="title-container">
                        {beingEditied ? (
                            <input value={newTitle} onChange={(e) => handleTitleChange(e)} />
                        ) : (
                            <h3>{title}</h3>
                        )}
                    </div>
                    <div className="price-container">
                        <p>
                            Rs.
                            {beingEditied ? (
                                <input value={newPrice}
                                    onChange={(e) => handlePriceChange(e)}
                                />
                            ) : (
                                price
                            )}
                        </p>
                    </div>
                    <div className="rating-container">
                        {beingEditied ? (
                            <input value={newRating}
                                onChange={(e) => handleRatingChange(e)}
                            />
                            ) : (
                                <ReactStars
                                    count={5}
                                    size={28}
                                    value={rating}
                                    color2={'#ffd700'}
                                />
                        )}
                    </div>
                </div>
            </div>


            <div className="desc-actions">
                <div className="description-container">
                    {beingEditied ? (
                        <textarea
                            value={newDescription}
                            rows="5"
                            cols="30"
                            onChange={(e) => handleDescChange(e)}
                        />
                    ) : (
                        <p>{description}</p>
                    )}
                </div>

                <div>
                    {beingEditied ? (
                        <div className="action-container">
                            <div className="action-icon" onClick={handleSave}>
                                <img src={tick} alt='save'/>
                            </div>

                            <div className='action-icon'
                                onClick={() => setBeingEditied(false)}
                            >
                                <img src={cross} alt='cancle' />
                            </div>
                        </div>
                    ) : (
                        <div className="action-container">
                            <div className="action-icon"
                            onClick={() => setBeingEditied(true)}>
                                <img src={edit} alt='edit'/>
                            </div>
                            <div className="action-icon" onClick={handleDelete}>
                                <img src={delete} alt='delete'/>
                            </div>
                            <div className="action-icon" onClick={addProductToCart}>
                                <img src={cart} alt='addToCart'/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}