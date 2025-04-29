import { Link } from 'react-router-dom';

import events from '../data/events';
import './Catalog.css'

function Catalog({ addToCart, cart }) {
    return (
        <div>
            <h1 id="title">Upcoming Events</h1>
            <div className='catalog-page'>

                {events.map(event => {
                    const isInCart = cart.includes(event.id);

                    return (
                        <div key={event.id}>
                            <hr />
                            <div >
                                <Link to={`/events/${event.id}`}>
                                    <img src={event.image} alt={event.title} />
                                    <h2>{event.title}</h2>
                                </Link>
                                <div className="event-info" id="event-catalog">
                                    <div className="price-and-place">
                                        <p> ${event.price} </p>
                                        <p>{event.location}</p>
                                    </div>
                                    <div className="date-and-time">
                                        <p>{event.date}</p>
                                        <p>{event.startTime} - {event.endTime}</p>
                                    </div>
                                    <button className="catalog-add" onClick={() => !isInCart && addToCart(event.id)} disabled={isInCart}>
                                        {isInCart ? 'In Cart' : 'Add to Cart'}</button>
                                </div>
                            </div>
                            <footer></footer>
                            </div>
                    );
                })}
            </div>
        </div>
    );
}


export default Catalog;