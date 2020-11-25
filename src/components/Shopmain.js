import React from 'react';
import { Link } from 'react-router-dom';

function Shopmain(props) {
  return (
    <div className="shopItems">
    {props.items.map(item => (
      <div key={item.id}>
      <Link to={`/shop/${item.id}`}>
      <div>
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} width="240px" />
      <h3>${item.price}</h3>
      </div>
      </Link>
      <h4>Add to Cart</h4>
      </div>
    ))}
    </div>
  );
}

export default Shopmain;