import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Itempage(props) {
  let { id } = useParams();
  const idInt = parseInt(id)
  const ourItems = props.items;
  const ourSingleItem = ourItems.filter(x => x.id === idInt)[0];


  return (
    <div className="itemDetail">
    <div>
      <div>
      <h1>{ourSingleItem.name}</h1>
      <img src={`/${ourSingleItem.img}`} alt={ourSingleItem.name} width="240px" />
      <h3>${ourSingleItem.price}</h3>
      </div>
      <h4 id={ourSingleItem.id} onClick={props.addToCart}>Add to Cart</h4>
      </div>
    </div>
  );
}

export default Itempage;