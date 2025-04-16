import React from 'react';

const SignUp = ({ onSignInClick }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Add sign-up logic here (e.g., API call)
    // After successful sign-up, switch to sign-in form
    onSignInClick(); // Automatically go to Sign In form
  };

  return (
    <div>
      <h3 className="text-center">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
      <p className="mt-3 text-center">
        Already have an account?{" "}
        <button className="btn btn-link text-white p-0" onClick={onSignInClick}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;
