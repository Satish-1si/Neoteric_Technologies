import "./section_1.css";
import LightImage from "./Images/SectionBG.svg";
import DarkImage from "./Images/WhoWeAreDarkmode.svg"

import React from "react";

export const PromoContent = ({Mode}) => {
	return (
		<section
			className={Mode?"PromoContainer_Dark":"PromoContainer_Light"}
		>
			<section className="sectionContainer">
				<h1 className="gradientHeading">
					About Neoteric Technologies
				</h1>
                <p className="sectionContent">
                  At Neoteric Technologies, we're more than just a technology company—we're pioneers on a mission to redefine the future through innovative solutions. Established with a bold vision to empower businesses and individuals alike with cutting-edge digital tools, we blend expertise with creativity to shape the technological landscape.
                </p>
                <h2 className="usp-title">What sets us apart?</h2>
                <p className="sectionContent">
                At Neoteric Technologies, innovation is in our DNA. We don't just follow trends; we set them. Our team of skilled professionals is dedicated to pushing the boundaries of what's possible, constantly exploring new ideas, technologies, and methodologies to stay ahead of the curve.
                </p>
                <h2 className="usp-title_1">Our approach</h2>
                <p className="sectionContent">
                We believe that collaboration is key to success. That's why we work closely with our clients, understanding their unique needs and objectives to deliver tailor-made solutions that exceed expectations. From initial concept to final implementation, we're with you every step of the way, ensuring transparency, communication, and exceptional results.
                </p>


			</section>
		</section>
	);
};