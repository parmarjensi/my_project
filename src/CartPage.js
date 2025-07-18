import React from 'react';

function CartPage({ cart, removeFromCart, updateQuantity }) {   
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); 

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <img src={item.image} alt={item.name} width="60" />
          <div style={{ flex: 1, marginLeft: 10 }}>
            <h4>{item.name}</h4>
            <p>Price: ₹ {item.price.toFixed(2)}</p>
            <p>
              Qty:
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}> - </button>
              <span style={{ margin: '0 10px' }}>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
            </p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹ {total.toFixed(2)}</h3>
      <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
    </div>
  );  
 }

export default CartPage;