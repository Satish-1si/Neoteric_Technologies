import React from "react";
import "./Home.css";
import RightIcon from "./Images/arrow-circle-Right.png";
import LeftIcon from "./Images/arrow-circle-left.png";

import { useState, useEffect } from "react";
import { PromoContent } from "./Section_1";
import { SolutionBanner } from "./section_2";
import { TechnologySolutions } from "./section_3";
import { Technologies } from "./section_4";
import { Contacts_Section } from "./section_5";
import { Clients } from "./section_6";
import { News_Blogs } from "./section_7";

const Images = [
  {
    Img_path: require("./Images/Component18.png"),
    paragraph: `Unlocking Potential, Unleashing <span class="bold-word">Innovation</span>`,
    boldWord: "Innovation"
  },
  {
    Img_path: require("./Images/Component17.png"),
    paragraph: `AI-Powered Solutions for a <span class="bold-word">Smarter</span> Tomorrow`,
    boldWord: "Smarter"
  },
  {
    Img_path: require("./Images/Component16.png"),
    paragraph: `Empowering <span class="bold-word">Businesses</span>, Empowering You`,
    boldWord: "Businesses"
  },
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === Images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? Images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextImage();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage, Images.length]);

  return (
    <section
      className="section_container col-lg-12 col-md-12 col-sm-12 col-12"
    >
      <div className="carousel-img" style={{ backgroundImage: `url(${Images[currentImage].Img_path})` }}>
        <div className="TextContainer">
          <p dangerouslySetInnerHTML={{ __html: Images[currentImage].paragraph }} />
          <div className="icons_container">
            <img src={LeftIcon} onClick={handlePrevImage} />
            <img src={RightIcon} onClick={handleNextImage} />
            <div className="pageNo">
              <p>{`0${currentImage + 1} / 0${Images.length}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const HomeSection = ({Mode}) => {
  return (
    <div >
    <HeroSection />
      <PromoContent Mode={Mode}/>
      <SolutionBanner  Mode={Mode} />
      <TechnologySolutions  Mode={Mode} />
      <Technologies  Mode={Mode}/>
      <Contacts_Section  Mode={Mode}/>
      {/* <Clients /> */}
      <News_Blogs  Mode={Mode}/>
    </div>
  );
};
export default HomeSection;
