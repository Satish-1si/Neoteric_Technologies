import React, { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function WhoWeAre({Mode}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const whoWeAreContent = [
    {
      title: "More Than a Company: We Are a Vision, a Community, a Future",
      content: ` "Welcome to [Your Company Name], where we transcend the conventional definition of a company. We are more than an entity; we are a visionary force, a tight-knit community, and the architects of a future shaped by shared aspirations. Here, we celebrate not just work, but the collective pursuit of excellence, fostering an environment where every individual plays a vital role in crafting a meaningful future. Join us, and together, let's redefine what it means to be part of a forward-thinking, collaborative community."`,
    },
    {
      title: "We Are Catalysts of Change, Architects of Progress",
      content: ` "At Neoteric Technologies, we embody the spirit of transformation. As catalysts of change, we fuel innovation and progress, shaping a future where ideas flourish and possibilities abound. We architect meaningful advancements, leveraging our expertise to propel industries forward. Join us on this journey of dynamic change, where every contribution serves as a building block for a brighter tomorrow"`,
    },
    {
      title: "Building Tomorrow's Success, Today.",
      content: ` "At Neoteric Technologies, we are dedicated to constructing the success of tomorrow in the present moment. Through innovative solutions, strategic vision, and a commitment to excellence, we lay the foundation for a future where success is not just a goal but a daily reality. Join us on this journey, where we build the future today."`,
    },
  ];

  const updateContent = (delta) => {
    const newIndex = (currentIndex + delta + whoWeAreContent.length) % whoWeAreContent.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="careers-card-1"  style={Mode?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}}>
      <div className="heading-1">Who We Are</div>
      <div className="title pt-1">{whoWeAreContent[currentIndex].title}</div>
      <div className="para-1 mt-3">{whoWeAreContent[currentIndex].content}</div>
      <div className="leftRight">
        <div className="whoImg" onClick={() => updateContent(-1)}>
          <CiCircleChevLeft />
        </div>
        <div className="whoImg" onClick={() => updateContent(1)}>
          <CiCircleChevRight />
        </div>
        <div className="whoImgText">{`0${currentIndex + 1} / 0${whoWeAreContent.length}`}</div>
      </div>
    </div>
  );
}
