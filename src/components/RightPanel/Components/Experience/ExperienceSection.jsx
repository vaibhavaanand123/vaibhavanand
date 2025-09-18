import React from "react";
import ExperienceItem from "./ExperienceItem";


const experiences = [
  {
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    period: "2024 – 2025",
    description:
      "Designed and developed full-stack applications with React.js, Next.js, and Spring Boot. Specialized in SEO-friendly UIs, performance tuning, and scalable systems. Delivered projects like MatchMyTravels that improved search visibility and reduced page load times by 30%.",
    tags: ["React.js", "Spring Boot", "Redux", "Mapbox", "SEO", "Web Performance"],
    link: "https://www.matchmytravels.in",
  },
  {
    role: "Operations Analyst",
    company: "Pristyn Care",
    period: "2021 – 2023",
    description:
      "Optimized workflows using SQL & Excel, ensuring accurate data and delivering actionable insights to management. Enhanced operational efficiency and mentored colleagues in data analysis best practices.",
    tags: ["SQL", "Excel", "Data Analysis", "Process Optimization", "Business Intelligence"],
  },
];

const ExperienceSection = () => {
 return (
    <section
      id="experience"
      aria-labelledby="exp-title"
      className="border-t border-white/10 mt-12"
    >
      <h2
        id="exp-title"
        className="text-white text-2xl font-bold mt-8 mb-6"
      >
        Professional Experience
      </h2>

      <div className="space-y-6 ">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
