import React from "react";

const footerLinks = [
  [
    { text: "FAQ", link: "https://help.netflix.com/support/412" },
    { text: "Investor Relations", link: "http://ir.netflix.com/" },
    { text: "Privacy", link: "https://help.netflix.com/legal/privacy" },
    { text: "Speed Test", link: "https://fast.com" },
  ],
  [
    { text: "Help Centre", link: "https://help.netflix.com" },
    { text: "Jobs", link: "https://jobs.netflix.com/jobs" },
    { text: "Cookie Preferences", link: "#" },
    { text: "Legal Notices", link: "https://help.netflix.com/legal/notices" },
  ],
  [
    {
      text: "Account",
      link:
        "https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount",
    },
    { text: "Ways to Watch", link: "/watch" },
    {
      text: "Corporate Information",
      link: "https://help.netflix.com/legal/corpinfo",
    },
    {
      text: "Only on Netflix",
      link: "https://www.netflix.com/in/browse/genre/839338",
    },
  ],
  [
    { text: "Media Centre", link: "https://media.netflix.com/" },
    { text: "Terms of Use", link: "https://help.netflix.com/legal/termsofuse" },
    { text: "Contact Us", link: "https://help.netflix.com/contactus" },
  ],
];

const Footer = () => {
  return (
    <div className="containerfooter">
      <footer className="footer">
        <p>
          <span>
            Question? Call: <a href="000-800-919-1743">000-800-919-1743</a>
          </span>
        </p>
        <br />
        <div className="footer-div">
          {footerLinks.map((column, colIndex) => (
            <ul className="footer-layout" key={colIndex}>
              {column.map((item, idx) => (
                <li key={idx}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div>
          <button className="lan">
            <i className="fas fa-globe"></i>
            <select name="LanguageSelect" id="language-select">
              <option value="en-IN" defaultValue>
                English
              </option>
              <option value="hi-IN">हिन्दी</option>
            </select>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
