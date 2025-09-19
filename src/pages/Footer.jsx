// src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-primary-text/10 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-14 flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-1">
          <Link to="/" aria-label="Vaibhav Anand homepage" className="inline-block text-xl font-semibold text-white">
            Vaibhav Anand
          </Link>
          <p className="mt-3 text-sm text-gray-400 max-w-lg">
            Full Stack Engineer — building accessible, performant, and SEO-friendly web experiences.
          </p>
          <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Vaibhav Anand. All rights reserved.</p>
        </div>

        <nav aria-label="Footer navigation" className="flex-1 flex justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-200 mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#about" className="hover:text-white">About</Link></li>
              <li><Link to="/#projects" className="hover:text-white">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-200 mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:you@domain.com" className="hover:text-white">Email</a></li>
              <li><a href="https://github.com/vaibhavaanand123" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
              <li><a href="https://x.com/vaibhavanandav" target="_blank" rel="noreferrer" className="hover:text-white">X</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
