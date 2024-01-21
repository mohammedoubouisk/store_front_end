import React, { useState, useEffect } from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDeleteForever } from "react-icons/md";


export const Cart = ({ cart, setCart }) => {
    console.log(cart)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const newTotal = cart.reduce((acc, item) => acc + item.count * item.price, 0);
            setTotal(newTotal);

        };

        calculateTotal();
    }, [cart]);
    
    const tt = () => toast.success('Item removed with successefuly', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        const removeItem = (idItem) => {
            const updatedCart = cart.filter((item) => item.id !== idItem);
            setCart(updatedCart);
            tt()
        };

        const shop =()=>toast.success("Thank you for choosing our services. Rest assured, we'll reach out to you within the next hour 😊", {
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0.4,
            theme: "light",
            });


    

    return (
        <>
            <div>
        <button onClick={tt}></button>
        <ToastContainer />
      </div>
            {cart.map((item) => (
                <div className="cartItems" key={item.id}>
                    <img src={item.image} alt="photo" />
                    <h3>{item.title}</h3>
                    <p>{item.price}$</p>
                    <p>{item.count === 0 ? 1 : item.count} piece</p>
                    <p>{item.count * item.price === 0 ? item.price : item.count * item.price}$ TTC</p>
                    <button onClick={() => removeItem(item.id)}><MdDeleteForever/></button>
                </div>
            ))}
            <div className="freeship">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>{total}$</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Free</p>
                            <p>shopping upto 1000$</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>{total}$</h3>
                        </div>
                    </div>
                    <div class="cont">
                        {
                           cart.length === 0  ? 
                           <></>                            
                        :
                        <button class="btn" onClick={shop}><span >Payer</span>
                            <img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62" />
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
