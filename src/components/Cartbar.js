import React from 'react';


function Cartbar(props) {


  return (
    <div className="Cartbar">
    {props.cart.map(item => {
      return (
      <div key={item.id} className="cartBarItem">
        <div className="cartBarName">{item.name}</div>
        <div className="cartBarPrice">{item.price}</div>
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
    <div className="totalBar">Total: ${props.getTotal()}</div>
    </div>
  );
}

export default Cartbar;