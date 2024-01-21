// import React, { useState } from 'react';
// import { Item } from './Item';
// import { Nav } from './Nav';

// const ShoppingContainer = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (id, title, price) => {
//     const isProductInCart = cartItems.some(item => item.id === id);

//     if (isProductInCart) {
//       alert('This product is already in the cart! Click in view to add more.');
//     } else {
//       setCartCount(cartCount + 1);
//       setCartItems([...cartItems, { id, title, price }]);
//     }
//   };

//   return (
//     <div>
//       <Item id={1} image="image-url" title="Product 1" category="Category 1" price={19.99} addToCart={addToCart} />
//       {/* Render other components and pass cartItems as a prop */}
//       <Nav cartItems={cartItems} />
//     </div>
//   );
// };

// export default ShoppingContainer;
