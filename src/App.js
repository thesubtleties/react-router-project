import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Shopmain from './components/Shopmain';
import Cart from './components/Cart';
import Itempage from './components/Itempage';
import './App.css';

function App() {
  
  const placeholderItems = [
    {
      name: "Hat",
      id: 1,
      price: "9.99",
      img: "hat.jpg",
    },
    {
      name: "Shirt",
      id: 2,
      price: "19.99",
      img: "shirt.jpeg",
    },
    {
      name: "Joggers",
      id: 3,
      price: "19.99",
      img: "joggers.jpg",
    },
    {
      name: "Jeans",
      id: 4,
      price: "39.99",
      img: "jeans.webp",
    },
    {
      name: "Shoes",
      id: 5,
      price: "35.99",
      img: "shoes.webp",
    }
  ];

  const [cart, setCart] = useState([]);
  const getItemNumber = (event) => {

  }

  const addToCart = (event) => {

  }

  const removeFromCart = (event) => {

  }
  
  const checkout = () => {
    setCart([]);
  }
  return (
    <div className="fullApp">
    
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/shop">
      <Shop items={placeholderItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/shop/:id">
      <Itempage items={placeholderItems}  />
      </Route>
    </Switch>
      
    </Router>

    </div>
  );
}

export default App;
