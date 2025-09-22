import React from "react";
import { Title, Meta } from "react-head"; // 

const blogPosts = [
  {
    slug: "building-react-tailwind-portfolio",
    title: "How I Built My Portfolio with React & TailwindCSS",
    date: "September 2025",
    description:
      "A detailed look at building a fast, accessible portfolio using React, TailwindCSS, and modern SEO techniques.",
    keywords: ["React", "TailwindCSS", "Portfolio", "SEO"],
  },
  {
    slug: "spring-boot-react-scalable-apps",
    title: "Scaling Full-Stack Apps with Spring Boot & React",
    date: "August 2025",
    description:
      "Best practices and patterns for developing production-ready full-stack applications with Spring Boot and React.",
    keywords: ["Spring Boot", "React", "Full Stack", "Scalability"],
  },
];

const Blogs = () => {
  return (
    <main
      id="main-content"
      className="min-h-screen px-6 py-12 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white"
    >
      {/* 📝 Page SEO Meta */}
      <Title>Blog | Vaibhav Anand</Title>
      <Meta
        name="description"
        content="Read insightful blogs on React, TailwindCSS, Spring Boot, Full-Stack Development, and SEO by Vaibhav Anand."
      />
      <Meta
        name="keywords"
        content="React Blog, TailwindCSS Blog, Spring Boot Blog, Full-Stack Development, SEO"
      />
      <Meta name="author" content="Vaibhav Anand" />
      <Meta property="og:title" content="Blog | Vaibhav Anand" />
      <Meta
        property="og:description"
        content="Insights and tutorials on React, TailwindCSS, Spring Boot, scalability, and software engineering."
      />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://yourdomain.com/blog" />
      <Meta name="twitter:card" content="summary_large_image" />

      {/* Blog Header */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Insights & Stories
        </h1>
        <p className="text-gray-400 text-lg">
          A collection of thoughts, learnings, and experiments in{" "}
          <span className="text-primary-text">Full-Stack Development</span>,{" "}
          <span className="text-primary-text">Scalable Systems</span>, and{" "}
          <span className="text-primary-text">Travel Tech</span>.
        </p>
      </header>

      {/* Blog List */}
      <section className="grid gap-10 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-md hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-3">{post.date}</p>
              <p className="mb-4 text-gray-300">{post.description}</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <a
                href={`/blog/${post.slug}`}
                className="inline-block text-sm px-4 py-2 bg-primary-text text-black font-medium rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                aria-label={`Read more about ${post.title}`}
              >
                Read More →
              </a>
              <span className="text-xs text-gray-500">
                {post.keywords.join(", ")}
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Blogs;
