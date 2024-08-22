import React, { useState } from "react";
import "../pagecss/poetry.css";

const Poetry = () => {
  const [activeTab, setActiveTab] = useState("poetryCollection");

  const renderContent = () => {
    switch (activeTab) {
      case "poetryCollection":
        return <div>Poetry Collection Content</div>;
      case "myPoetry":
        return <div>My Poetry Content</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === "poetryCollection" ? "active" : ""}`}
          onClick={() => setActiveTab("poetryCollection")}
        >
          Poetry Collection
        </div>
        <div
          className={`tab ${activeTab === "myPoetry" ? "active" : ""}`}
          onClick={() => setActiveTab("myPoetry")}
        >
          My Poetry
        </div>
      </div>
      <div className="poetry-container">
        <div className="poetry-content-and-tabs">{renderContent()}</div>
      </div>
    </>
  );
};

export default Poetry;
