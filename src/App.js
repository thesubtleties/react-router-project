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
//THIS IS WHERE WE NEED TO START NEXT. If item is in cart, we find the item in the array and we add 1 to the quantity. If item is not in cart, we add item to cart and then set quantity to 1. We will edit this to copy over to make either +1 -1 buttons or an input field that allows us to manually type in a number to quantity.
  const addToCart = (event) => {
    console.log(event)
    event.preventDefault();
    const itemId = parseInt(event.target.id);
    const item = placeholderItems.find(oneItem => oneItem.id === itemId);
    const newCart = cart;
    if (newCart.find(item => item.id === itemId)) {
      console.log("found")
      setCart(() => {
        const cartIndex = newCart.findIndex(ourItem => ourItem.id === itemId);
        console.log(newCart[cartIndex].quantity)
        const newQuantity = newCart[cartIndex].quantity + 1;
        newCart[cartIndex] = {
          ...item,
          quantity: newQuantity

        }
        ///WHY IS THIS ADDING TWO INSTEAD OF ONE!? is the event firing twice??? 
        console.log(newCart[cartIndex].quantity)
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
      <Shop items={placeholderItems} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
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
