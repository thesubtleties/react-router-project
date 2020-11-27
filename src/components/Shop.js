import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cartbar from './Cartbar';
import Shopmain from './Shopmain';
import Itempage from './Itempage';


function Shop(props) {

  return (
    <div>
    
  
    <Shopmain addToCart={(event) => props.addToCart(event)} items={props.items} />

    <Cartbar cart={props.cart} />

    </div>
  );
}

export default Shop;