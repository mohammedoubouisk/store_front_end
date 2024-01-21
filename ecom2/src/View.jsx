import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './View.css'
import { IoStar } from "react-icons/io5";

export const View = ({ buy, cart }) => {
    const { id } = useParams(); // Get the id parameter from the URL
    const [product, setProduct] = useState([]);
    const [piece, setpiece] = useState(0);


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.ok) {
                    console.log("not found ip");
                }
                else {
                    return res.json();
                }
            })
            .then(json => {
                // Check if the JSON response is not empty
                if (json && Object.keys(json).length > 0) {
                    setProduct([json]); // Wrap the single product in an array
                } else {
                    // Handle the case where the product is not found

                }
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
        // to add 1 in already bay before enter to view
        const filter = cart.filter(item => item.id === parseInt(id, 10));
        if (filter.length > 0) {
            if (piece > 1) {
                setpiece(piece)
            }
            else {
                setpiece(1)
            }
        }
        else {
            setpiece(piece)
        }
    }, [id, cart]);


    // Check if the product is in the cart



    const moins = () => {
        if (piece <= 0) {
            alert("quntie inpossible to be under of 0")
        }
        else {
            setpiece(piece - 1)
        }
    }
    const plus = () => {
        setpiece(piece + 1)
    }

    return (
        <>
            {product.map(item => (
                <>
                    <div className='view'>
                        <div className='pict'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='dicription'>
                            <h2>{item.title}</h2>
                            <div className="star">
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </div>
                            <div className="prices">
                                <p className='oldp'>Old Price <span style={{ color: "red" }}><s>{item.price + 10.1}</s></span></p>
                                <p className='newp'>New Price <span style={{ color: "#f3b123" }}>{item.price}</span> </p>
                            </div>
                            <div className='wasf'>
                                <p>
                                    Chic women's apparel for diverse occasions, paired with elegant jewelry crafted from precious metals; complemented by versatile electronics to enhance daily communication, productivity, and entertainment.
                                </p>
                            </div>
                            <p className='sizes'>
                                <p className='size'>color  <select name="" id="">
                                    <option value="M">red</option>
                                    <option value="M">blue</option>
                                    <option value="M">black</option>
                                    <option value="M">white</option>
                                </select></p>
                                <p className='size'>size  <select name="" id="">
                                    <option value="M">S</option>
                                    <option value="M">M</option>
                                    <option value="M">L</option>
                                    <option value="M">XL</option>
                                    <option value="M">XXL</option>
                                </select></p>
                                <p>Category  <span style={{ color: "rgb(61, 84, 95)", fontWeight: 'bold' }}>{item.category}</span></p>
                            </p>
                            <div className='quatite'>
                                <p className='qnt'>Quantite</p>
                                <p>
                                    <span className='plus' onClick={moins}>-</span><span className='number'>{piece}</span><span className='plus' onClick={plus}>+</span></p>
                            </div>
                            <hr className='hr' style={{ marginTop: "50px" }} />

                            <div class="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>{piece * item.price} $</h3>
                            </div>
                            <hr className="hr" />
                            <div class="cont">
                                <button class="btn" onClick={() => buy(piece, parseInt(id), item.title, item.image, item.price)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};
