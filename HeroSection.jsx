import React, { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Submitted email:", email);
  };

  return (
    <div className="main">
      <div className="box"></div>

      <div className="hero">
        <div className="hero-tv">
          <h1>
            <span>Unlimited movies, TV shows and more</span>
          </h1>
          <p>Starts at ₹149. Cancel at any time.</p>
        </div>

        <div className="hero-start">
          <form onSubmit={handleSubmit}>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="hero-start-email-started">
              <div className="hero-start-email">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit">
                Get Started <i className="fal fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
