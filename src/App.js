import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Itempage from './components/Itempage';
import Cartbar from './components/Cartbar';
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
    console.log(event)
    event.preventDefault();
    const itemId = parseInt(event.target.id);
    const item = placeholderItems.find(oneItem => oneItem.id === itemId);
    const newCart = cart;
    if (newCart.find(item => item.id === itemId)) {
      console.log("found")
      const cartIndex = newCart.findIndex(ourItem => ourItem.id === itemId);
      console.log(newCart[cartIndex].quantity)
      const newQuantity = newCart[cartIndex].quantity + 1;
      newCart[cartIndex] = {
        ...item,
        quantity: newQuantity
      }
      setCart(() => {
        return (
        [
          ...newCart
        ]
      )
        
      }); 
      
    } else {
      console.log("not found")
      setCart(() => {  
        return (         
            [
              ...newCart,
            {
              ...item,
              quantity: 1
            }
          ]        
        )
      })
    }
  }
  const removeOneFromCart = (event) => {
    console.log(event)
    event.preventDefault();
    const itemId = parseInt(event.target.id);
    const item = placeholderItems.find(oneItem => oneItem.id === itemId);
    const newCart = cart;
    if (newCart.find(item => item.id === itemId)) {
      const cartIndex = newCart.findIndex(ourItem => ourItem.id === itemId);
      if (newCart[cartIndex].quantity > 1) {
      const newQuantity = newCart[cartIndex].quantity - 1;
      setCart(() => {

        newCart[cartIndex] = {
          ...item,
          quantity: newQuantity

        }
        return (
        [
          ...newCart
        ]
      )   
      }); 
    }
  }
  }
  const removeFromCart = (event) => {
    console.log(event)
    event.preventDefault();
    const itemId = parseInt(event.target.id);
    const item = placeholderItems.find(oneItem => oneItem.id === itemId);
    const newCart = cart;
    if (newCart.find(item => item.id === itemId)) {
      const cartIndex = newCart.findIndex(ourItem => ourItem.id === itemId);
      newCart.splice(cartIndex, 1);
      setCart(() => {
        return (
        [
          ...newCart
        ]
      )   
      }); 
    
  }
  }
  const getTotal = () => {
    const newCart = cart;
    const totalPrice = cart.reduce((total, item) => {
      return total + (item.quantity * item.price)
    }, 0);
    const roundedTotal = Math.round(totalPrice * 100) / 100;
    return roundedTotal.toFixed(2);
  }
  const manualQuantityChange = (event) => {
    console.log(event)
    event.preventDefault();
    const itemId = parseInt(event.target.id);
    const item = placeholderItems.find(oneItem => oneItem.id === itemId);
    const newCart = cart;
    if (newCart.find(item => item.id === itemId)) {
      console.log("found")
      const cartIndex = newCart.findIndex(ourItem => ourItem.id === itemId);
      console.log(newCart[cartIndex].quantity)
      let newQuantity;
      if (event.target.value > 0 && event.target.value !== NaN) {
      newQuantity = parseInt(event.target.value);
      } else {
      newQuantity = 1;
      }
      newCart[cartIndex] = {
        ...item,
        quantity: newQuantity
      }
      setCart(() => {
        return (
        [
          ...newCart
        ]
      )
        
      }); 
      
    }

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
      <Shop items={placeholderItems} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
      <Cartbar cart={cart} addToCart={addToCart} removeOneFromCart={removeOneFromCart} removeFromCart={removeFromCart} getTotal={getTotal} manualQuantityChange={manualQuantityChange} />
      </Route>
      <Route exact path="/shop/:id">
      <Itempage items={placeholderItems} addToCart={addToCart}  />
      <Cartbar cart={cart} addToCart={addToCart} removeOneFromCart={removeOneFromCart} removeFromCart={removeFromCart} getTotal={getTotal} manualQuantityChange={manualQuantityChange} />
      </Route>
      <Route exact path="/cart">
        <Cart cart={cart} addToCart={addToCart} removeOneFromCart={removeOneFromCart} checkout={checkout} removeFromCart={removeFromCart} getTotal={getTotal} manualQuantityChange={manualQuantityChange} />
      </Route>

    </Switch>
      
    </Router>

    </div>
  );
}

export default App;
