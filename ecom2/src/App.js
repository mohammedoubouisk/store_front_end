import React, { useState } from 'react';
import { Nav } from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Offers } from './Offers';
import { Home } from './Home';
import { Footer } from './Footer';
import { View } from './View';
import { HomeProduct } from './HomeProduct';
import { Cart } from './Cart';
import { Save } from './Save';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Contact } from './Contact';
import { About } from './About';

const App = () => {
  const [cart, setcart] = useState([]);
  const [saves , setsaves]=useState([])

  const tt = () => toast.warn('this product is already in the cart !', {
    position: "top-center",
    autoClose: 800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    
  const hrt=()=>toast.warn('this product already saved!', {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const buy = (count, id, title, image, price) => {

    const isProductInCart = cart.some(item => item.id === id);
    if (isProductInCart) {
      tt()
    }
    else {
      setcart([...cart, { id, count, title, image, price }]);
    }

  }

  const HandleClick = (id, image, title, price) => {
    const isProductInCart = cart.some(item => item.id === id);
    let count = 1;

    if (isProductInCart) {
      tt()
    }
    else {
      setcart([...cart, { id, image, title, price, count }]);

    }

  };

const Liked =(id,image,title,category,price)=>{
  const ispresent = saves.some(item=>item.id == id);
  if(ispresent){
    hrt()
  }
  else{
    setsaves([...saves,{id,image,title,category,price}])
  }
}

  return (
    <>
      <div>
        <p onClick={tt}></p>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <Nav counter={cart.length} saves={saves} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/offers" element={<Offers HandleClick={HandleClick} Liked={Liked} saves={saves} />} />
          <Route path='/product' element={<HomeProduct HandleClick={HandleClick} Liked={Liked} saves={saves}/>} />
          <Route path="/:id" element={<View buy={buy} cart={cart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setcart} />} />
          <Route path='/save' element={<Save saves={saves} setsaves={setsaves}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
