import "./section_7.css";

const Source=[
    {
        image:"https://cdn.builder.io/api/v1/image/assets/TEMP/10bcbc08e27b38a31e324489856afaf95cf98d567cc6aac3a334282675e0fbbc?apiKey=51553a7002134689b5fc60911a6e8898"
        ,heading:"NEWS"
        ,paragraph:"   Unlocking the Potential of AI in Business : AComprehensive Guide"
        ,btn_txt:"Learn More"
    },
    {
        image:"https://cdn.builder.io/api/v1/image/assets/TEMP/10bcbc08e27b38a31e324489856afaf95cf98d567cc6aac3a334282675e0fbbc?apiKey=51553a7002134689b5fc60911a6e8898"
        ,heading:"NEWS"
        ,paragraph:"   Unlocking the Potential of AI in Business : AComprehensive Guide"
        ,btn_txt:"Learn More"
    },
    {
        image:"https://cdn.builder.io/api/v1/image/assets/TEMP/10bcbc08e27b38a31e324489856afaf95cf98d567cc6aac3a334282675e0fbbc?apiKey=51553a7002134689b5fc60911a6e8898"
        ,heading:"NEWS"
        ,paragraph:"   Unlocking the Potential of AI in Business : AComprehensive Guide"
        ,btn_txt:"Learn More"
    }
]
const Description = () => {
	return (
		<section className="news-section">
			<header className="section-header">
				News & Blog
			</header>
			<p className="section-content">
				Stay informed and inspired with our latest
				news updates and insightful blog posts.
				Explore a wealth of valuable resources
				covering industry trends, tips, best
				practices, and more. Whether you're looking
				to expand your knowledge or stay ahead of
				the curve, our blog has something for
				everyone.
			</p>
		</section>
	);
};
const Cards = () => {
	return (
		<article  className="articleCard">
			{
                Source.map(({image,paragraph,heading,btn_txt})=>{
                    return <div className="article_sub_card">
                    <img
                        loading="lazy"
                        src={image}
                        alt="Unlocking the Potential of AI in Business"
                        className="articleImage"
                    />
                    <div className="contentWrapper">
                        <header className="articleHeader">
                            {heading}
                        </header>
                        <h1 className="articleTitle">
                           {paragraph}
                        </h1>
                    </div>
                    <div className="actionWrapper">
                        <button className="learnMoreBtn">
                            {btn_txt}
                        </button>
                    </div>
                </div>
                })
            }
		</article>
	);
};
export const News_Blogs = () => {
	return (
		<div className="News_Blogs_container">
			<div className="News_Blogs_section">
				<Description />
				<Cards />
			</div>
		</div>
	);
};
