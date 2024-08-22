import React, { useEffect } from "react";
import "../pagecss/home.css";

import ImageSlider from "../components/IamgeSlider";

import blonde from "../images/Frank Ocean - Blonde.jpeg";
import btb from "../images/Amy_Winehouse_Back_to_Black_(album).png";
import mrmorale from "../images/Kendrick_Lamar_-_Mr._Morale_&_the_Big_Steppers.png";
import ants from "../images/Ants_from_Up_There_-_Black_Country,_New_Road.jpg";
import miami from "../images/steven-gerstmeyr-5gutfsMll7U-unsplash.jpg";
import ocean from "../images/adam-nemeroff-2KRJvTt75G0-unsplash.jpg";
import trees from "../images/chris-lejarazu-08wxrVv5rp8-unsplash.jpg";
import neo from "../images/thierry-meier-PKEPAeMBOIU-unsplash.jpg";

const Home = () => {
  const slides = [
    { image: ocean, title: ocean, quote: "been there done that" },
    { image: neo, title: ocean, quote: "catch ma drift?" },
    { image: miami, title: ocean, quote: "get busy livin'" },
    { image: trees, title: ocean, quote: "or get busy diyin'" },
  ];

  useEffect(() => {
    const titleLines = document.querySelectorAll(".title-line");
    const options = { threshold: 1.0 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-of-view");
          // observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-of-view");
        }
      });
    }, options);

    titleLines.forEach((line) => {
      observer.observe(line);
    });

    // Cleanup observer on unmount
    return () => {
      titleLines.forEach((line) => {
        observer.unobserve(line);
      });
    };
  }, []);

  return (
    <div className="homepage">
      <div className="image-container">
        <div className="miami-container">
          <ImageSlider slides={slides} />
        </div>
      </div>
      <div className="playlist-section">
        <div className="section-title-container">
          <div className="title-line one">
            <div className="line-content">Top 4</div>
          </div>
          <div className="title-line two">
            <div className="line-content">Albums</div>
          </div>
          <div className="title-line three">
            <div className="line-content">Of All Time</div>
          </div>
        </div>
        <div className="section-content">
          <div className="cards a">
            <img className="card-cover" src={blonde} alt="blonde" />
            <div className="card-detail">
              <h1>Blonde</h1>
              <h2>Frank Ocean</h2>
            </div>
          </div>
          <div className="cards b">
            <img className="card-cover" src={btb} alt="blonde" />
            <div className="card-detail">
              <h1>Back To Black</h1>
              <h2>Amy Winehouse</h2>
            </div>
          </div>
          <div className="cards c">
            <img className="card-cover" src={mrmorale} alt="blonde" />
            <div className="card-detail">
              <h1>MrMoral And the big Steppers</h1>
              <h2>K Dot</h2>
            </div>
          </div>
          <div className="cards d">
            <img className="card-cover" src={ants} alt="blonde" />
            <div className="card-detail">
              <h1>Ants from up there</h1>
              <h2>Black Coutnry New Road</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="film-section">
        <div className="section-title-container">
          <div className="title-line one">
            <div className="line-content">Top 4</div>
          </div>
          <div className="title-line two">
            <div className="line-content">Albums</div>
          </div>
          <div className="title-line three">
            <div className="line-content">Of All Time</div>
          </div>
        </div>
        <div className="section-content">
          <div className="cards a">
            <img className="card-cover" src={blonde} alt="blonde" />
            <div className="card-detail">
              <h1>Blonde</h1>
              <h2>Frank Ocean</h2>
            </div>
          </div>
          <div className="cards b">
            <img className="card-cover" src={btb} alt="blonde" />
            <div className="card-detail">
              <h1>Back To Black</h1>
              <h2>Amy Winehouse</h2>
            </div>
          </div>
          <div className="cards c">
            <img className="card-cover" src={mrmorale} alt="blonde" />
            <div className="card-detail">
              <h1>MrMoral And the big Steppers</h1>
              <h2>K Dot</h2>
            </div>
          </div>
          <div className="cards d">
            <img className="card-cover" src={ants} alt="blonde" />
            <div className="card-detail">
              <h1>Ants from up there</h1>
              <h2>Black Coutnry New Road</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect } from "react";
// import "../pagecss/home.css";
// import ImageSlider from "../components/IamgeSlider";
// import blonde from "../images/Frank Ocean - Blonde.jpeg";
// import miami from "../images/steven-gerstmeyr-5gutfsMll7U-unsplash.jpg";
// import ocean from "../images/adam-nemeroff-2KRJvTt75G0-unsplash.jpg";
// import trees from "../images/chris-lejarazu-08wxrVv5rp8-unsplash.jpg";
// import neo from "../images/thierry-meier-PKEPAeMBOIU-unsplash.jpg";

// const Home = () => {
//   const slides = [
//     { image: ocean, title: ocean, quote: "been there done that" },
//     { image: neo, title: ocean, quote: "catch ma drift?" },
//     { image: miami, title: ocean, quote: "get busy livin'" },
//     { image: trees, title: ocean, quote: "or get busy diyin'" },
//   ];

//   useEffect(() => {
//     const albums = document.querySelectorAll(".albums");
//     const playlistContent = document.querySelector(".playlist-content");

//     const options = {
//       root: playlistContent,
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     let currentVisible = -1;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = Array.from(albums).indexOf(entry.target);

//         if (entry.isIntersecting && index !== currentVisible) {
//           if (currentVisible !== -1) {
//             console.log("inner");
//             albums[currentVisible].classList.remove("fade-in");
//             albums[currentVisible].classList.add("fade-out");
//           }
//           console.log("outer");
//           entry.target.classList.add("fade-in");
//           entry.target.classList.remove("fade-out");
//           currentVisible = index;
//         }
//       });
//     }, options);

//     albums.forEach((album) => {
//       observer.observe(album);
//     });

//     // Cleanup observer on unmount
//     return () => {
//       albums.forEach((album) => {
//         observer.unobserve(album);
//       });
//     };
//   }, []);

//   return (
//     <div className="homepage">
//       <div className="image-container">
//         <div className="miami-container">
//           <ImageSlider slides={slides} />
//         </div>
//       </div>
//       <div className="playlist-section">
//         <div className="playlist-content">
//           <div className="albums">
//             <img className="album-cover" src={blonde} alt="blonde" />
//             <div className="album-detail">
//               <h1>Blonde</h1>
//               <h2>Frank Ocean</h2>
//               <p>
//                 This is the best piece fo muysic ever made by any artist ever
//               </p>
//             </div>
//           </div>
//           <div className="albums">
//             <img className="album-cover" src={blonde} alt="blonde" />
//             <div className="album-detail">
//               <h1>Blonde</h1>
//               <h2>Frank Ocean</h2>
//               <p>
//                 This is the best piece fo muysic ever made by any artist ever
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="film-section"></div>
//     </div>
//   );
// };

// export default Home;
