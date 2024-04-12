import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './registration';
import './home';

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem('userData');
    if (!storedUserData) {
      setError('User not registered');
      return;
    }

    const userData = JSON.parse(storedUserData);

    // Check if provided credentials match the stored user data
    if (email === userData.email && password === userData.password) {
      console.log('Login successfully!');
      sessionStorage.setItem('user', JSON.stringify(userData));
      onLoginSuccess();
      alert('Login successful!');
      navigate('/home'); // Navigate to the home page
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="mb-3">
          </div>
          <form onSubmit={handleSubmit} className="shadow p-4">
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <hr />

            <p className="text-center mb-0">
              If you don't have an account <Link to="/registration">Register Now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;