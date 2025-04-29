import { useParams } from 'react-router-dom';
import events from '../data/events';

import './EventPage.css'

function EventPage({addToCart, cart}) {
    const { id } = useParams();
    const event = events.find(event => event.id === parseInt(id));
    const isInCart = cart.includes(event.id);
    
    return (
        <div className="event-page">
            
            <h2 id="event-title">{event.title}</h2>
            <img src={event.image} alt={event.title} />
            <button className="btn" onClick={() => !isInCart && addToCart(event.id)} disabled={isInCart}>
                {isInCart ? 'In Cart' : 'Add to Cart'}</button>
            <p className="descrip">{event.description}</p>
            <div className="event-info">
                <div className="price-and-place">
                    <p> ${event.price} </p>
                    <p>{event.location}</p>
                </div>
                <div className="date-and-time">
                    <p>{event.date}</p>
                    <p>{event.startTime} - {event.endTime}</p>
                </div>
            </div>
            <footer></footer>
        </div>
    );
}

export default EventPage;