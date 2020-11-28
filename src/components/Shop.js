import React from 'react';
import Shopmain from './Shopmain';


function Shop(props) {

  return (
    <div>
    
  {console.log(props.cart)}

    <Shopmain addToCart={(event) => props.addToCart(event)} items={props.items} />



    </div>
  );
}

export default Shop;