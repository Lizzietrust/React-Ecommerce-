import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const CartItem = ({ data }) => {
    const { id, productName, price, productImage } = data;

    const { cartItems, addToCart, removeFromCart, updateCartItem } = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={productImage} alt="" />
        <div className="description">
            <p>
                <strong>{productName}</strong>
            </p>
            <p>{price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
