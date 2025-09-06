import React,{ useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodepen, SiGoodreads } from "react-icons/si";


const sections = ["about", "experience", "projects"];

const LeftPannel = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // 40% visible = active
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <aside
      className="
        fade-in
        w-full lg:w-[42%] 
        lg:fixed lg:inset-y-0 lg:left-0
        text-primary-text
        border-b border-primary-text/40 lg:border-none
      "
    >
      <div className="mx-auto max-w-3xl px-6 py-8 sm:py-10 lg:py-24 lg:px-45 h-full  flex flex-col  ">
        {/* Header / Identity */}
        <header className="mb-8 lg:mb-20 relative  mx-auto ">
          <h1>Vaibhav Anand</h1>
          <p className="mt-2 lg:ml-3 ml-1 text-sm sm:text-base text-justify">
            Full Stack Engineer
          </p>
          <p className="mt-4 lg:ml-3 ml-1 max-w-md text-sm text-justify leading-6">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mt-4 lg:mt-10 flex lg:flex-col space-x-2 lg:space-y-4  lg:space-x-0 uppercase text-[13px] tracking-[0.2em] justify-around lg:items-end">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "true" : "false"}
              className={`group flex items-center space-x-3 transition-colors duration-200 ${
                activeSection === id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span
                className={`w-10 h-px hidden md:block transition-colors duration-200 ${
                  activeSection === id
                    ? "bg-white"
                    : "bg-gray-500 group-hover:bg-white"
                }`}
              />
              <span className="capitalize">{id}</span>
            </a>
          ))}
        </nav>

        {/* Push socials to bottom on desktop; inline on mobile */}
        <div className="mt-10 lg:mt-auto">
          <div className="flex items-center gap-5 text-primary-text justify-center space-x-4">
            <a
              className="hover:text-white"
              href="https://github.com/vaibhavaanand123"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={25} />
            </a>
            <a
              className="hover:text-[#0a66c2]"
              href="https://www.linkedin.com/in/vaibhavanandva/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              className="hover:text-white"
              href="https://codepen.io"
              target="_blank"
              rel="noreferrer"
              aria-label="CodePen"
            >
              <SiCodepen size={25} />
            </a>
            <a
              className="hover:text-pink-400"
              href="https://www.instagram.com/vaibhav_aanand/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={25} />
            </a>
            <a
              className="hover:text-green-400"
              href="https://goodreads.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Goodreads"
            >
              <SiGoodreads size={24} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftPannel;
