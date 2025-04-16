import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onResetClick, onSignUpClick }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add actual authentication logic here
    // If successful, navigate to the dashboard:
    navigate('/');
  };

  return (
    <div>
      <h3 className="text-center">Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
      </form>
      <p className="mt-3 text-center">
        <button className="btn btn-link text-white p-0" onClick={onResetClick}>Forgot Password?</button>
      </p>
      <p className="mt-2 text-center">
        Don’t have an account? <button className="btn btn-link text-white p-0" onClick={onSignUpClick}>Sign Up</button>
      </p>
    </div>
  );
};

export default SignIn;
