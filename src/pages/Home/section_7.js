import "./section_7.css";
import ai_Powered from "../Home/Images/AiImg.svg";
import blog from "../Home/Images/blogImg.svg";
import newsImg from "../Home/Images/newsImg.svg";

const Source = [
  {
    image: ai_Powered,
    heading: "NEWS",
    paragraph:
      "Unlocking the Potential of AI in Business: A Comprehensive Guide",
    btn_txt: "Learn More",
  },
  {
    image: blog,
    heading: "BLOG",
    paragraph: "Navigating Cybersecurity Challenges in a Digital Age",
    btn_txt: "Learn More",
  },
  {
    image: newsImg,
    heading: "NEWS",
    paragraph: "The Future of Artificial Intelligence: Trends to Watch",
    btn_txt: "Learn More",
  },
];
const Description = () => {
  return (
    <section className="news-section">
      <header className="section-header">News & Blog</header>
      <p className="section-content">
        Stay informed and inspired with our latest news updates and insightful
        blog posts. Explore a wealth of valuable resources covering industry
        trends, tips, best practices, and more. Whether you're looking to expand
        your knowledge or stay ahead of the curve, our blog has something for
        everyone.
      </p>
    </section>
  );
};
const Cards = () => {
  return (
    <article className="articleCard col-lg-4 col-md-4 col-sm-6 col-12">
      {Source.map(({ image, paragraph, heading, btn_txt }) => {
        return (
          <div className="article_sub_card">
            <img
              loading="lazy"
              src={image}
              alt="Unlocking the Potential of AI in Business"
              className="articleImage"
            />
            <div className="contentWrapper">
              <header className="articleHeader">{heading}</header>
              <h1 className="articleTitle">{paragraph}</h1>
            </div>
            <div className="actionWrapper">
              <button className="learnMoreBtn">{btn_txt}</button>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export const News_Blogs = ({Mode}) => {
  return (
    <div className="News_Blogs_container"
    style={Mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}
    >
      <div className="News_Blogs_section">
        <Description />
        <Cards />
      </div>
    </div>
  );
};
