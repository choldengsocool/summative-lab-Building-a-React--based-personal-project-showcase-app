import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError('Username and password are required.');
      return;
    }

    setError('');
    onLogin(username.trim(), password.trim());
  }

  return (
    <div className="login-card">
      <h2>Admin Login</h2>
      <p className="login-copy">Please sign in before accessing the admin dashboard.</p>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="btn btn-primary primary-btn">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;