import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cartbar from './Cartbar';

function Itempage(props) {
  let { id } = useParams();
  const idInt = parseInt(id)
  const ourItems = props.items;
  const ourSingleItem = ourItems.filter(x => x.id === idInt)[0];


  return (
    <div className="itemDetail">
    {console.log("here")}
    <div>
      <div>
      <h1>{ourSingleItem.name}</h1>
      <img src={`/${ourSingleItem.img}`} alt={ourSingleItem.name} width="240px" />
      <h3>${ourSingleItem.price}</h3>
      </div>
      <h4>Add to Cart</h4>
      </div>
      <Cartbar />
    </div>
  );
}

export default Itempage;