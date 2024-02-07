import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
