import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Catalog from './components/Catalog';
import EventPage from './components/EventPage';
import Cart from './components/Cart';
import events from './data/events';


import './App.css'

function App() {
    const [cart, setCart] = useState([]);
    const addToCart = (eventId) => {
        setCart(lastCart => [...lastCart, eventId]);
    };

    const removeFromCart = (eventId) => {
        setCart(lastCart => lastCart.filter(id => id !== eventId));
    };

    return (
        <Router>
            <header>
                <h1>Chivent</h1>
                <nav>
                    <Link to="/">📰Event List</Link>
                    <Link to="/cart">🛒My Cart</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Catalog addToCart={addToCart} cart={cart} />} />
                <Route path="/events/:id" element={<EventPage addToCart={addToCart} cart={cart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
        </Router>
    );
}

export default App;