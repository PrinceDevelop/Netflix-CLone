import React from "react";
const trendingItems = [
  { rank: 1, src: "content/img/Deva.jpg", alt: "Deva" },
  { rank: 2, src: "content/img/pushpa.jpg", alt: "Pushpa 2" },
  { rank: 3, src: "content/img/dragon.jpg", alt: "Dragon" },
  { rank: 4, src: "content/img/officer.jpg", alt: "Officer" },
  { rank: 5, src: "content/img/khakee.jpg", alt: "Khakee" },
  { rank: 6, src: "content/img/squid.jpg", alt: "Squid" },
  { rank: 7, src: "content/img/Daaku.jpg", alt: "Daaku" },
  { rank: 8, src: "content/img/Thandel.JPG", alt: "Thandel" },
  { rank: 9, src: "content/img/Vidaamuyarchi.jpg", alt: "Vidaamuyarchi" },
];

const TrendingSection = () => {
  return (
    <section className="trending-section">
      <h2>Trending Now</h2>
      <div className="trending-container">
        {trendingItems.map((item) => (
          <div key={item.rank} className="trending-item">
            <span className="rank">{item.rank}</span>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default TrendingSection;
