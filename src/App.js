import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Dummy product data
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

function Home({ addToCart, addToSavedItems }) {
  return (
    <div>
      <h1>Home</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => addToSavedItems(product)}>Save for Later</button>
        </div>
      ))}
    </div>
  );
}

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
}

function SavedItems({ savedItems }) {
  return (
    <div>
      <h1>Saved Items</h1>
      {savedItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToSavedItems = (product) => {
    setSavedItems([...savedItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/saved-items">Saved Items</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
          <Route path="/saved-items">
            <SavedItems savedItems={savedItems} />
          </Route>
          <Route path="/">
            <Home addToCart={addToCart} addToSavedItems={addToSavedItems} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;