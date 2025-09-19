import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RightPanel from "./components/right/RightPanel";
import TorchEffect from "./components/torchEffect/TorchEffect";
import Blog from "./components/Blogs/Blogs"; 
import LeftPannel from "./components/left/LeftPannel"
// Future: import BlogPost from "./components/Blogs/BlogPost";

const App = () => {
  return (
    <div className="min-h-screen bg-primary text-primary-text">
      {/* 🔥 Default SEO for the site */}
      <Helmet>
        <title>Vaibhav Anand | Full Stack Engineer</title>
        <meta
          name="description"
          content="Portfolio and blog of Vaibhav Anand, a Full Stack Engineer specializing in React, Spring Boot, SEO, and scalable web apps."
        />
        <meta property="og:title" content="Vaibhav Anand | Full Stack Engineer" />
        <meta
          property="og:description"
          content="Explore my projects, blog posts, and insights on full stack development, SEO, and software engineering."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
      </Helmet>

      {/* Skip link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 tag bg-primary-600 text-white"
      >
        Skip to content
      </a>

      {/* Visual effect */}
      <TorchEffect />

      {/* Routes */}
      <Routes>
        {/* Main portfolio layout */}
        <Route
          path="/"
          element={
            <>
              <LeftPannel />
              <RightPanel />
            </>
          }
        />

        {/* Blog listing page */}
        <Route path="/blog" element={<Blog />} />

        {/* Single blog post (future-ready) */}
        {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
      </Routes>
    </div>
  );
};

export default App;
