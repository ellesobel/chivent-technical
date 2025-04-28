import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Catalog from './components/Catalog';
import EventPage from './components/EventPage';
import Cart from './components/Cart'

import './App.css'

function App() {
    return (
        <Router>
            <header>
                <h1>Chivent</h1>
                <nav>
                    <Link to="/">📰Catalog</Link>
                    <Link to="/cart">🛒My Cart</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/events/:id" element={<EventPage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;