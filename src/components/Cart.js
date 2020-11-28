import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Cart(props) {
  return (
    <div className="Cart">
    {props.cart.map(item => {
      return (
      <div key={item.id} className="cartItem">
        <div className="cartName">{item.name}</div>
        <img className="cartImage" src={`/${item.img}`} alt="" />
        <div className="cartPrice">{item.price}</div>
        <button id={item.id} className="cartBarButton" onClick={props.removeOneFromCart}>-</button>
        <input 
          type="number"
          onChange={props.manualQuantityChange}
          value={item.quantity}
          id={item.id}
          min="1"
          className="cartBarInput"
          />
          <button id={item.id} className="cartBarButton" onClick={props.addToCart}>+</button>
          <div id={item.id} className="cartBarRemove" onClick={props.removeFromCart}>Remove</div>
      
      </div>)
    })}
    <div className="cartTotal">Total: ${props.getTotal()}</div>
    {(props.cart.length > 0) ? <button className="checkoutButton" onClick={props.checkout}>Check Out</button> : ""}
    </div>
  );
}

export default Cart;