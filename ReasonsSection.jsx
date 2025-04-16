import React from "react";

const reasons = [
  {
    title: "Enjoy on your TV",
    desc:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "content/img/tv-icon.png",
    alt: "TV Icon",
  },
  {
    title: "Download your shows to watch offline",
    desc: "Save your favourites easily and always have something to watch.",
    icon: "content/img/download-icon1.png",
    alt: "Download Icon",
  },
  {
    title: "Watch everywhere",
    desc:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "content/img/watch-icon.png",
    alt: "Watch Icon",
  },
  {
    title: "Create profiles for kids",
    desc:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: "content/img/kids-icon.png",
    alt: "Kids Icon",
  },
];

const ReasonsSection = () => {
  return (
    <section className="reasons-section">
      <h2>More reasons to join</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}>
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
            <img src={reason.icon} alt={reason.alt} className="icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
