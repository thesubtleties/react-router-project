import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Cartbar from './Cartbar';
import Shopmain from './Shopmain';
import Itempage from './Itempage';


function Shop(props, { match }) {

  const items = props.items;



// see match.params below what the fuck.
  return (
    <div>
    
    <Router>
    <Switch>
    <Route exact path="/shop">
    <Shopmain items={items} />
    </Route>
    <Route path={`/shop/:id`}>
    <Itempage params={match.params} />
    </Route>


    </Switch>
    
    <Cartbar />
    </Router>
    </div>
  );
}

export default Shop;