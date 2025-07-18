import React, { useState } from 'react';
import ProductList from './ProductList';
import CartPage from './CartPage';

function App() {
  const [cart, setCart] = useState([]);  //card initialized state

  const addToCart = (product) => {   //add product or updates quantity if already in cart
    //check if product already in cart
    const exists = cart.find(item => item.id === product.id); //find product in cart
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item //update quantity if product already in cart
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]); //add product to cart if not in cart
    }
  };

  const removeFromCart = (id) => {  //remove product from cart 
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => { 
    if (quantity < 1) return;      //if quantity is less than 1, return
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Shopping Cart</h1>
      <ProductList addToCart={addToCart} />
      <CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;