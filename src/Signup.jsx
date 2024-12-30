import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(''); // New state for the confirmation message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const signinDetails = { firstName, lastName, number, email };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signinDetails)
    }).then(() => {
      setIsPending(false);
      setConfirmationMessage('Sign in Success!'); // Set confirmation message
      setTimeout(() => setConfirmationMessage(''), 3000); // Clear the message after 3 seconds
     navigate('/');
    });
  };

  return (
    <div className='div-screen'>
       <div className='background-image'>
      <img 
        src='https://hayatkhalvat.com/wp-content/uploads/2024/02/طالع-بینی.jpg'
        className='w-full object-cover'
        />
      <div className="message-box">
      <h1 className='heading'>Join us!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type='text'
            className='input'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label>Last Name:</label>
          <input
            type='text'
            className='input'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label>Contact Number:</label>
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
          {!isPending && <button className="button mt-10">Sign UP</button>}
          {isPending && <button className="button mt-10" disabled>Signing UP...</button>}
        </form>
        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
      </div>
    </div>
    </div>
  );
};

export default Signup;
