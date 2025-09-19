import React from "react";
import { Link } from "react-router-dom";
import ExperienceSection from "./rightComponents/Experience/ExperienceSection";
import Footer from "../../pages/Footer";

const RightPanel = () => {
  return (
    <main
      className="
        fade-in
        w-full lg:w-[60%]
        lg:ml-[40%]
        text-primary-text
    
      "
    >
      <div className="mx-auto max-w-2xl px-2 py-10">
        {/* ABOUT */}
        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title" className="text-white text-2xl font-bold">
            About Me
          </h2>
          <div className="mt-4 text-md leading-6 space-y-4 text-justify text-white/80">
            <p>
              I’m <span className="font-semibold text-white">Vaibhav Anand</span>, 
              a Frontend & Full-Stack Developer passionate about building 
              <span className="font-semibold text-white"> high-performance, SEO-optimized, and accessible web applications</span>. 
            </p>
            <p>
              With expertise in <strong>React.js, Next.js, Redux, and Spring Boot</strong>, 
              I specialize in creating scalable solutions that blend thoughtful 
              design with robust engineering. My work is focused on driving real 
              business outcomes — from improving performance metrics to boosting 
              conversions.
            </p>
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="/Vaibhav Anand.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                rounded-lg
                bg-gradient-to-r from-blue-500 to-indigo-600
                px-5 py-2.5
                text-sm font-semibold text-white
                shadow-md
                hover:from-indigo-600 hover:to-purple-600
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                transition
              "
            >
              View Full Resume →
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* PROJECTS */}
        <section
          id="projects"
          aria-labelledby="proj-title"
          className="border-t border-white/10 mt-12"
        >
          <h2 id="proj-title" className="text-white text-2xl font-bold mt-8">
            Featured Projects
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6">
            {/* Project 1 */}
            <article className="card">
              <header className="flex items-center justify-between">
                <h3 className="text-white text-lg font-semibold">
                  MatchMyTravels – Cab Platform
                </h3>
                <div className="hidden sm:flex gap-2">
                  <span className="tag">React</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">Spring Boot</span>
                </div>
              </header>
              <p className="mt-2 text-sm leading-6 text-white/70">
                A full-stack booking platform with trip-type forms, MapmyIndia 
                autocomplete, and vendor dashboards. <strong>Improved load 
                speed by 30% and boosted SEO ranking</strong>.
              </p>
              <div className="mt-3 flex gap-3">
                <Link
                  to="/projects/matchmytravels"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Case Study →
                </Link>
                <a
                  href="https://www.matchmytravels.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Live Demo →
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="card">
              <header className="flex items-center justify-between">
                <h3 className="text-white text-lg font-semibold">
                  Vendor Admin Panel
                </h3>
                <div className="hidden sm:flex gap-2">
                  <span className="tag">TypeScript</span>
                  <span className="tag">React Query</span>
                  <span className="tag">Spring Boot</span>
                </div>
              </header>
              <p className="mt-2 text-sm leading-6 text-white/70">
                A role-based dashboard with CRUD flows, file uploads, and 
                analytics. Designed for scalability and streamlined vendor 
                management.
              </p>
              <div className="mt-3 flex gap-3">
                <Link
                  to="/projects/vendor-admin"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Case Study →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Footer spacer */}
        <div className="h-10" />
        <Footer />
      </div>
    </main>
  );
};

export default RightPanel;
