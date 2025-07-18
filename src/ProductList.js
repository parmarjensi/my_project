import React from 'react';
import { products } from './products';

function ProductList({ addToCart }) {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', padding: '1rem' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
          <img src={product.image} alt={product.name} width="100%" />
          <h4>{product.name}</h4>
          <p>Brand: {product.brand}</p>
          <p>₹ {product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
