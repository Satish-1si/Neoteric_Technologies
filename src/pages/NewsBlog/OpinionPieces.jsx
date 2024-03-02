import React from "react";
import image from "../NewsBlog/images/img1.jpg";

export default function OpinionPieces() {
  const opinion = [
    {
      title: "OPINION",
      para: "Why Every Business Needs a Digital Strategy",
      para_1:
        "Dive into the importance of digital strategy in today's digital-first world and learn how businesses can leverage technology to stay competitive and relevant.",
        author:"-By Lorem ipsum"
    },
    {
      title: "OPINION",
      para: "The Role of AI in Business Transformation",
      para_1:
        "Explore the transformative potential of artificial intelligence and its impact on business operations, customer experiences, and industry disruption.",
        author:"-By Lorem ipsum"
    }
    
  ];
  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row-2">
        <h1 className="opinion-pieces-title mb-3">Opinion Pieces</h1>
            {opinion.map((eachItem, index) => {
              const { title, para, para_1,author } = eachItem;
              return (
                  <div key={index} className="opinion d-flex">
                    <div className="opinion-image mb-3">
                      <img
                        className="opinion-sub-image"
                        src={image}
                        alt="Neoteric"
                      />
                    </div>
                    <div className="opinion-pieces-head">
                      <h3 className="opinion-title text-primary">{title}</h3>
                      <p className="opinion-para mb-1">{para}</p>
                      <p className="opinion-para-1 mb-1">{para_1}</p>
                      <p className="opinion-author text-primary">{author}</p>
                    </div>
                  </div>
                
              );
            })}
        </div>
      </div>
    </div>
  );
}
