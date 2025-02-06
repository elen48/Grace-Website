// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const response = await axios.get('http://localhost:5000/api/admin/events');
        setEvents(response.data);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Our Church</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#sermons">Sermons</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="about">
                    <h2>About Us</h2>
                    <p>Information about the church...</p>
                </section>
                <section id="events">
                    <h2>Upcoming Events</h2>
                    <div className="event-list">
                        {events.map(event => (
                            <div className="event-card" key={event._id}>
                                <img src={event.image} alt={event.title} />
                                <h3>{event.title}</h3>
 <p>{new Date(event.date).toLocaleDateString()}</p>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="sermons">
                    <h2>Sermons</h2>
                    <p>Links to sermons...</p>
                </section>
                <section id="contact">
                    <h2>Contact Us</h2>
                    <form id="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Church Organization</p>
            </footer>
        </div>
    );
}

export default App
