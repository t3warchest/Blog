import React from "react";
import { useParams, NavLink } from "react-router-dom";

const Article = () => {
  const { articleId } = useParams();

  return (
    <div className="home-container">
      <div className="homebody">
        <div className="article-content">
          <NavLink to="/blogs">Back to Blogs</NavLink>
          <h1>{`Article ${articleId}`}</h1>
          <p>This is the content of the article {articleId}.</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
