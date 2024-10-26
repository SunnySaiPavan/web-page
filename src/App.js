import React, { useState } from 'react';
import './App.css'; // Make sure to import the CSS file

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div class="container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br/>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br/>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {success && <div className="success-message">Your message has been sent successfully!</div>}
        </div>
    );
};

export default App;
