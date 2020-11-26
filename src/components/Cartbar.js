import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Cartbar(props) {
  return (
    <div className="Cartbar">
    Test
    {console.log(props.cart)}

    </div>
  );
}

export default Cartbar;