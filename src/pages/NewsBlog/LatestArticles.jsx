import React from "react";
import image from "../NewsBlog/images/img1.jpg";

export default function LatestArticles() {
  const articles = [
    {
      title: "NEWS",
      para: "Unlocking the Power of Digital Transformation",
      para_1:
        "Learn how leading organizations are leveraging digital transformation to drive innovation, enhance customer experiences, and stay ahead of the competition.",
    },
    {
      title: "NEWS",
      para: "The Future of Work: Embracing Remote Collaboration:",
      para_1:
        "Learn how leading organizations are leveraging digital transformation to drive innovation, enhance customer experiences, and stay ahead of the competition.",
    },
    {
      title: "NEWS",
      para: "The Rise of Software-driven Businesses:",
      para_1:
        "Learn how leading organizations are leveraging digital transformation to drive innovation, enhance customer experiences, and stay ahead of the competition.",
    },
  ];
  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row-1">
        <h1 className="latestArticle-title mb-3">Latest Articles</h1>
            {articles.map((eachItem, index) => {
              const { title, para, para_1 } = eachItem;
              return (
                  <div key={index} className="news">
                    <div className="news-image mb-3">
                      <img
                        className="news-sub-image"
                        src={image}
                        alt="Neoteric"
                      />
                    </div>
                    <div className="news-contenthead">
                      <h3 className="news-title text-primary">{title}</h3>
                      <p className="news-para">{para}</p>
                      <p className="news-para-1">{para_1}</p>
                    </div>
                  </div>
                
              );
            })}
        </div>
      </div>
    </div>
  );
}
