import React from "react";
import { Helmet } from "react-helmet-async"; // for SEO meta tags

const blogPosts = [
  {
    slug: "building-react-tailwind-portfolio",
    title: "How I Built My Portfolio with React & TailwindCSS",
    date: "September 2025",
    description:
      "A detailed look at building a fast, accessible portfolio using React, TailwindCSS, and modern SEO techniques.",
    keywords: ["React", "TailwindCSS", "Portfolio", "SEO"],
    content: `
      Creating a personal portfolio is not just about design — it's about speed, accessibility, and SEO. 
      In this article, I share how I used React and TailwindCSS to build a performant and visually appealing website, 
      while also making sure it ranks well on search engines.
    `,
  },
  {
    slug: "spring-boot-react-scalable-apps",
    title: "Scaling Full-Stack Apps with Spring Boot & React",
    date: "August 2025",
    description:
      "Best practices and patterns for developing production-ready full-stack applications with Spring Boot and React.",
    keywords: ["Spring Boot", "React", "Full Stack", "Scalability"],
    content: `
      Building scalable applications requires careful planning of architecture, database management, and deployment. 
      Here I dive into lessons learned while scaling full-stack projects that power real-world businesses.
    `,
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      {/* SEO Meta */}
      <Helmet>
        <title>Blog | Vaibhav Anand</title>
        <meta
          name="description"
          content="Read insightful blogs on React, TailwindCSS, Spring Boot, Full-Stack Development, and SEO by Vaibhav Anand."
        />
        <meta
          name="keywords"
          content="React Blog, TailwindCSS Blog, Spring Boot Blog, Full-Stack Development, SEO"
        />
        <meta name="author" content="Vaibhav Anand" />
      </Helmet>

      {/* Blog Header */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Insights & Stories
        </h1>
        <p className="text-gray-400 text-lg">
          A collection of my thoughts, learnings, and experiments in{" "}
          <span className="text-primary-text">Full-Stack Development</span>,
          <span className="text-primary-text"> Scalable Systems</span>, and
          <span className="text-primary-text"> Travel Tech</span>.
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

export default Blog;
