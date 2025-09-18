import React from "react";

const ExperienceItem = ({ role, company, period, description, tags, link }) => {
  return (
    <div className="flex flex-col  transition sm:flex-row sm:space-x-6 rounded-xl  hover:bg-white/5 p-2 ">
      {/* Period */}
      <time
        className="text-[12px] uppercase  text-white/50 mb-2 sm:mb-0 sm:w-32 shrink-0"
        dateTime={period}
      >
        {period}
      </time>

      {/* Card */}
      <article

        className="

        "
      >
        <header className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-white text-lg font-semibold leading-snug">
            {role} ·{" "}
            <span className="text-blue-400 font-medium">{company}</span>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm text-blue-400 hover:underline"
              >
                ↗
              </a>
            )}
          </h3>
        </header>

        {/* Description */}
        <p className="mt-3 text-sm text-white/80 leading-6 text-justify">{description}</p>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="
                  px-3 py-1
                  rounded-full
                  bg-blue-500/10
                  text-blue-300
                  text-xs
                  font-medium
                  tracking-wide
                  whitespace-nowrap
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default ExperienceItem;
