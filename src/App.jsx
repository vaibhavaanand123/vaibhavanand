import React from "react";
import { Routes, Route } from "react-router-dom";
import { Title, Meta } from "react-head"; // ❌ Removed Head
import RightPanel from "./components/right/RightPanel";
import TorchEffect from "./components/torchEffect/TorchEffect";
import Blog from "./components/Blogs/Blogs";
import LeftPanel from "./components/left/LeftPannel";

const App = () => {
  return (
    <div className="min-h-screen bg-primary text-primary-text">
      {/* 🌍 Global SEO defaults */}
      <Title>Vaibhav Anand | Full Stack Engineer</Title>
      <Meta
        name="description"
        content="Portfolio and blog of Vaibhav Anand, a Full Stack Engineer specializing in React, Spring Boot, SEO, and scalable web apps."
      />
      <Meta name="author" content="Vaibhav Anand" />
      <Meta property="og:title" content="Vaibhav Anand | Full Stack Engineer" />
      <Meta
        property="og:description"
        content="Explore my projects, blog posts, and insights on full stack development, SEO, and software engineering."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://yourdomain.com/" />
      <Meta name="twitter:card" content="summary_large_image" />

      {/* ♿ Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 px-3 py-2 bg-primary-600 text-white rounded-md"
      >
        Skip to content
      </a>

      <TorchEffect />

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col lg:flex-row">
              <LeftPanel />
              <RightPanel />
            </div>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
