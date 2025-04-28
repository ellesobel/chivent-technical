import { useParams } from 'react-router-dom';
import events from '../data/events';

import './EventPage.css'

function EventPage() {
    const { id } = useParams();
    const event = events.find(event => event.id === parseInt(id));

    return (
        <div className="event-page">
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div className="event-info">
                <div className="price-and-place">
                    <p> ${event.price} </p>
                    <p>{event.location}</p>
                </div>
                <div className="date-and-time">
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                </div>
            </div>
        </div>
    );
}

export default EventPage;