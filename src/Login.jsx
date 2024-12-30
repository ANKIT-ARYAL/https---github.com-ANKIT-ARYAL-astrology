import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(''); // New state for the confirmation message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { username, password };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo)
    }).then(() => {
      setIsPending(false);
      setConfirmationMessage('Login Success!'); // Set confirmation message
      setTimeout(() => setConfirmationMessage(''), 3000); // Clear the message after 3 seconds
     navigate('/');
    });
  };

  return (
    <div className='div-screen'>
       <div className='background-image'>
      <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpLs60rvuDNfp5QFXUNtvdqrq1RaHPWE9AQ&s'
        className='w-full object-cover h-auto'
        />
      <div className="message-box">
      <h1 className='heading'>Login!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type='text'
            className='input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type='password'
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {!isPending && <button className="button mt-10">Login</button>}
          {isPending && <button className="button mt-10" disabled>Logging IN...</button>}
        </form>
        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
      </div>
    </div>
    </div>
  );
};

export default Login;
