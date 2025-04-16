
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // ✅ Define the function here
  const handleSignInClick = () => {
    navigate('/auth/signin');
  };

  return (
    <header id="navbar" className="container-fluid">
      <div className="navbar">
        <nav>
          <span>
            <img className="image" width="53" src="content/img/logo.svg" alt="logo" />
          </span>
          <div>
            <button className="lan">
              <i className="fas fa-globe"></i>
              <select name="LanguageSelect" id=":rl:">
                <option value="en-IN" defaultValue>English</option>
                <option value="hi-IN">हिन्दी</option>
              </select>
            </button>
            <div className="signin">
              <button onClick={handleSignInClick} className="btn btn-danger">Sign In</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
