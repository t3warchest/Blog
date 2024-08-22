import "./App.css";
import Title from "./components/Title";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Blogs from "./pages/blogs";
import Article from "./pages/Article";
import Poetry from "./pages/Poetry.js";

function App() {
  window.addEventListener("scroll", setScrollVar);
  window.addEventListener("resize", setScrollVar);

  function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled =
      htmlElement.scrollTop / htmlElement.clientHeight;
    console.log(percentOfScreenHeightScrolled * 100);
    htmlElement.style.setProperty(
      "--scroll",
      Math.min(percentOfScreenHeightScrolled * 100, 100)
    );
    htmlElement.style.setProperty(
      "--scrollpx",
      percentOfScreenHeightScrolled * 100
    );
  }
  setScrollVar();
  return (
    <Router>
      <div className="hue">
        <div className="title-section">
          <Title />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:articleId" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
