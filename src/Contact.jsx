import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(''); // New state for the confirmation message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, number, email, message };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    }).then(() => {
      setIsPending(false);
      setConfirmationMessage('Message sent successfully!'); // Set confirmation message
      setTimeout(() => setConfirmationMessage(''), 3000); // Clear the message after 3 seconds
     navigate('/');
    });
  };

  return (
    <div className='div-screen'>
      <div className='background-image'>
      <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8SD9puiUM8YWWq3CYOBwm_Aql8XVug8h8w&s'
        className='w-full object-cover'
        />
      <div className="message-box">
      <h1 className='heading'>Message us!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type='text'
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Number:</label>
          <input
            type='tel'
            className='input'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <label>Email ID:</label>
          <input
            type='email'
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Message:</label>
          <textarea
            className='input'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {!isPending && <button className="button mt-10">Send Message</button>}
          {isPending && <button className="button mt-10" disabled>Sending Message...</button>}
        </form>
        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>} {/* Display confirmation message */}
      </div>
    </div>
    </div>
  );
};

export default Contact;
