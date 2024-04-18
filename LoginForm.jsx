import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expressions for email and password strength
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordPattern = /(?=.*[A-Z])(?=.*[1-9])(?=.*[!@#$%^&])(?=.{8,})/;

    if (email.match(emailPattern) && password.match(passwordPattern)) {
      // Authentication successful, proceed with your logic here
      console.log('Authentication successful');
    } else {
      // Handle invalid email or weak password
      console.log('Invalid email or weak password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
