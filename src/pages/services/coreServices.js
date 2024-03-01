import { Link } from "react-router-dom";
import "./coreservices.css";
import { v4 } from "uuid";
import { useState } from "react";
import arrowImg from "./servicesImages/arrowIcon.svg";
import arrowActive from "./servicesImages/arrowActive.svg";

const Links = [
  { path: "Strategy", tittle: "Strategy" },
  { path: "Engineering", tittle: "Engineering" },
  { path: "Cloud", tittle: "Cloud" },
  { path: "Data & Analytics", tittle: "Data & Analytics" },
  {
    path: "AI (Artificial Intelligence) ",
    tittle: "AI (Artificial Intelligence)",
  },
  { path: "Cyber Security", tittle: "Cyber Security" },
];
const Data = [
  "Neoteric Technologies Pvt Ltd is dedicated to ushering businesses through the intricacies of the digital landscape with our strategic approach. Representing our commitment to excellence, our Strategy icon features a compass, symbolizing precision in tailored solutions and adept navigation. Specializing in aligning technology with your business objectives, we offer a clear trajectory to success. Our strategy, presented as a dynamic roadmap, underscores innovation and adaptability, showcasing our proficiency in steering clients towards sustainable growth. Partner with Neoteric Technologies for corporate excellence and strategic insights, propelling your business into a future where every decision yields transformative outcomes",
  "At Neoteric Technologies, our Engineering icon is emblematic of our unwavering commitment to technological excellence and innovation. Featuring a meticulously designed gear, it signifies the precision and seamless integration that defines our engineering solutions. We pride ourselves on crafting robust and efficient systems that serve as the backbone for transformative digital experiences. The dynamic nature of our icon reflects the forward-thinking mindset of our engineering team, continuously propelling progress. With a focus on cutting-edge technologies, Neoteric Engineering stands as a beacon of reliability and ingenuity, engineering solutions that redefine industry standards and pave the way for a future where technology harmoniously aligns with business objectives.",
  "The cloud  represents the seamless storage, accessibility, and collaboration of digital data over the internet. Its ethereal shape symbolizes the intangible yet powerful nature of cloud computing. This icon is synonymous with innovation, scalability, and the modern era of interconnected information, reflecting the shift from traditional to virtual infrastructure",
  "Data & Analytics blend raw information into strategic insights. By scrutinizing patterns and trends, organizations make informed decisions. This dynamic duo empowers businesses to optimize processes, predict outcomes, and stay ahead in a data-driven landscape. Unlocking the power of data, they fuel innovation and foster a competitive edge in today's evolving digital landscape.",
  "AI, a technological marvel, mimics human intelligence. It learns, adapts, and autonomously solves problems. From virtual assistants to advanced algorithms, AI transforms industries, enhancing efficiency and innovation. With the ability to analyze vast datasets, it fuels insights, revolutionizing how we work and engage in a rapidly evolving, intelligent world.",
  "Cybersecurity, a digital shield, safeguards systems and data from cyber threats. Utilizing advanced technologies like encryption and firewalls, it shields against hackers and malicious activities. In an era of increasing cyber risks, robust cybersecurity practices are crucial, ensuring the integrity, confidentiality, and availability of information in our interconnected digital landscape.",
];
const CoreServices = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0); // Track active link index

  const handleLinkClick = (index) => {
    setActiveLinkIndex(index); // Update active link index on click
  };

  return (
    <div className="CoreSubContainer">
      <h1 className="CoreHeading">Our Core Services</h1>
      <div className="servicesLinks">
        <div className="LinksSection">
          {Links.map((link, index) => (
            <div className="Link-individual">
              <li
                className={
                  index === activeLinkIndex
                    ? "ServiceActive"
                    : "ServiceNotActive"
                }
                onClick={() => handleLinkClick(index)}
              >
                {link.tittle}
              </li>
              {index === activeLinkIndex ? (
                <img className="Service-arrowImage" src={arrowActive} />
              ) : (
                <img className="Service-arrowImage" src={arrowImg} />
              )}
            </div>
          ))}
        </div>
        <div className="LinksInformation">
          <div className="LinksData">
            <p>{Data[activeLinkIndex]}</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
