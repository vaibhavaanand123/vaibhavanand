import React from "react";

/**
 * RightPanel
 * - Desktop (lg+): sits beside the fixed sidebar with left margin
 * - Mobile: full-width content stack
 */
const RightPanel = () => {
  return (
    <main
      className="
        fade-in
        w-full lg:w-[50%]
        lg:ml-[40%]
        text-primary-text
      "
    >
      <div className="mx-auto max-w-xl px-4 py-9">
        {/* ABOUT */}
        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title" className="sr-only">
            About
          </h2>
          <div className="text-md leading-6 space-y-6 text-justify">
            <p>
              I’m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
            </p>
            <p>
              Currently, I’m a{" "}
              <span className="font-semibold text-white">
                Full Stack Engineer
              </span>
              , specializing in accessibility and scalable systems. I contribute
              to the creation and maintenance of UI and backend components that
              power applications, ensuring platforms meet modern web standards.
            </p>
            <p>
              In my spare time I’m usually tinkering with side projects,
              reading, or exploring new libraries and patterns across the JS and
              Java ecosystems.
            </p>
          </div>

          {/* Download Resume Button */}
          <div className="mt-6">
            <a
              href="/Vaibhav Anand.pdf" // put your resume file inside public/ folder
              // download
              target="_blank" // opens in new tab
              rel="noopener noreferrer" // security best practice
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
              View Full Resume --
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          aria-labelledby="exp-title"
          className="border-t border-white/10 mt-10 lg:mt-16"
        >
          <h2 id="exp-title" className="mt-8 text-white">
            Experience
          </h2>

          <ol className="mt-6 space-y-6">
            {/* Item 1 */}
            <li className="card">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] uppercase tracking-widest text-white/50">
                  2024 — Present
                </p>
                <div className="shrink-0 space-x-2 hidden sm:block">
                  <span className="tag">JavaScript</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">React</span>
                  <span className="tag">Spring Boot</span>
                </div>
              </div>
              <h3 className="mt-2 text-white text-lg">
                Senior Full Stack Engineer · Example Company
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Build and maintain critical components across frontend and
                backend. Collaborate with cross-functional teams—developers,
                designers, and PMs— to implement best practices in performance,
                accessibility, and DX.
              </p>
              <div className="sm:hidden mt-3 space-x-2">
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
                <span className="tag">React</span>
                <span className="tag">Spring Boot</span>
              </div>
            </li>

            {/* Item 2 */}
            <li className="card">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] uppercase tracking-widest text-white/50">
                  2021 — 2024
                </p>
                <div className="shrink-0 space-x-2 hidden sm:block">
                  <span className="tag">Node.js</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Docker</span>
                  <span className="tag">AWS</span>
                </div>
              </div>
              <h3 className="mt-2 text-white text-lg">
                Lead Engineer · Uptoextent
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Built design systems, high-quality web apps, APIs, and CI/CD
                pipelines. Drove cross-team collaboration and mentored engineers
                on modern web practices.
              </p>
              <div className="sm:hidden mt-3 space-x-2">
                <span className="tag">Node.js</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Docker</span>
                <span className="tag">AWS</span>
              </div>
            </li>
          </ol>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          aria-labelledby="proj-title"
          className="border-t border-white/10 mt-10 lg:mt-14"
        >
          <h2 id="proj-title" className="mt-8 text-white">
            Projects
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6">
            <article className="card">
              <header className="flex items-center justify-between">
                <h3 className="text-white">Raahi Sathi – Travel Platform</h3>
                <div className="hidden sm:flex gap-2">
                  <span className="tag">React</span>
                  <span className="tag">Vite</span>
                  <span className="tag">Tailwind</span>
                </div>
              </header>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Full-stack booking experience with location autocomplete, trip
                types, validation, and Map APIs. Optimized for SEO and
                conversions.
              </p>
              <div className="sm:hidden mt-3 space-x-2">
                <span className="tag">React</span>
                <span className="tag">Vite</span>
                <span className="tag">Tailwind</span>
              </div>
            </article>

            <article className="card">
              <header className="flex items-center justify-between">
                <h3 className="text-white">Vendor Admin Panel</h3>
                <div className="hidden sm:flex gap-2">
                  <span className="tag">TypeScript</span>
                  <span className="tag">React Query</span>
                  <span className="tag">Spring Boot</span>
                </div>
              </header>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Role-based dashboard for vendors with metrics, CRUD flows, and
                file uploads.
              </p>
              <div className="sm:hidden mt-3 space-x-2">
                <span className="tag">TypeScript</span>
                <span className="tag">React Query</span>
                <span className="tag">Spring Boot</span>
              </div>
            </article>
          </div>
        </section>

        {/* Footer spacer for nice bottom breathing room */}
        <div className="h-10" />
      </div>
    </main>
  );
};

export default RightPanel;
