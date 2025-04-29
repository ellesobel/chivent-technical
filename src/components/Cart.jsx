import { Link } from 'react-router-dom';
import events from '../data/events';
import './Cart.css'


function Cart({ cart, removeFromCart }) {
    const cartItems = events.filter(event => cart.includes(event.id));

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Your Cart is Empty!</h2>
                <button id="empty-button"><Link to="/chivent-technical/">Click Here to Return to Event List</Link></button>
            </div>
        );

    }
    return (
        <div id="full-cart">
            <h2 id="cart-title">Your Cart</h2>

            {cartItems.map(event =>
                <div key={event.id}>
                    <hr />

                    <h3>{event.title}</h3>
                    <p>${event.price}</p>
                    <button id="remove" onClick={() => removeFromCart(event.id)} >Remove From Cart</button>
                </div>
            )}
            <h3 id="total">Total: ${cartItems.reduce((sum, event) => sum + event.price, 0).toFixed(2)}</h3>
            <button id="checkout"><h3> Checkout Now</h3></button>
        </div>
    );
}

export default Cart;