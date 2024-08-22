// src/pages/Blogs.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../pagecss/blogs.css";

const Blogs = () => {
  const articles = [
    { id: 1, title: "Utility of faith" },
    { id: 2, title: "Another Article" },
    { id: 3, title: "Yet Another Article" },
    { id: 4, title: "Final Article" },
  ];
  return (
    <div className="home-container for-blog">
      <div className="homebody for-blog">
        <div className="article-menu">
          <h1>Welcome To The Jungle</h1>
          {articles.map((article) => (
            <div key={article.id} className="article">
              <NavLink to={`/blogs/${article.id}`}>{article.title}</NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
