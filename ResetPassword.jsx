import React, { useState } from 'react';

const ResetPassword = ({ onBackClick }) => {
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  // Handle first step: email submit
  const handleEmailSubmit = (e) => {
    e.preventDefault();

    // 👉 You can trigger API to send reset email here
    setShowNewPasswordForm(true);
  };

  // Handle second step: new password submit
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    // 👉 You can validate password + call backend here
    setPasswordUpdated(true);
  };

  return (
    <div>
      <h3 className="text-center">Reset Password</h3>

      {!showNewPasswordForm ? (
        <form onSubmit={handleEmailSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
        </form>
      ) : !passwordUpdated ? (
        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="New Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Update Password</button>
        </form>
      ) : (
        <div className="text-center text-success">
          <p>Your password has been updated successfully!</p>
        </div>
      )}

      <p className="mt-3 text-center">
        <button className="btn btn-link text-white p-0" onClick={onBackClick}>
          Back to Sign In
        </button>
      </p>
    </div>
  );
};

export default ResetPassword;
