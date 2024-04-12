import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Store data in local storage upon successful registration
    localStorage.setItem('userData', JSON.stringify(formData));

    console.log('User data saved successfully');
    alert('REGISTERED SUCCESSFULLY');

    // Clear form data
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <center>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="signup-form">
                <form onSubmit={handleSubmit} className="mt-5 border p-4 bg-lightgrey shadow">
                  <hr />
                  <h4 className="mb-3 text-secondary">Create Your Account</h4>
                  <div className="row">
                    <div className="mb-3 col-md-12">
                      <label>Email<span className="text-danger">*</span></label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Your College Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ outline: 'none' }}
                        required
                      />
                    </div>

                    <div className="mb-3 col-md-12">
                      <label>Password<span className="text-danger">*</span></label>
                      <div className="input-group">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-control"
                          placeholder="Enter Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={handleTogglePasswordVisibility}
                        >
                          {showPassword ? 'Hide' : 'Show'}
                        </button>
                      </div>
                    </div>
                    <div className="mb-3 col-md-12">
                      <label>Confirm Password<span className="text-danger">*</span></label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary float-end">
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-center mt-3 text-secondary">
                  If you have an account, please <Link to="/login">Login Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Register;