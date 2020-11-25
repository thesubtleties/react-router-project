import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="Topbar">
    <Link to="/"><div className="Logo">MyShop</div></Link>
    <Link to="/cart"><div className="CartLink">Cart</div></Link>
    <Link to="/shop"><div className="CartLink">Shop</div></Link>
    
    
    </div>
  );
}

export default Navbar;