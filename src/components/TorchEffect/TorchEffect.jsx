import react, { useEffect } from "react";

const TorchEffect = () => {
  useEffect(() => {
    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight");
    document.body.appendChild(spotlight);

    const handleMouseMove = (e) => {
      spotlight.style.setProperty("--x", `${e.clientX}px`);
      spotlight.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      spotlight.remove();
    };
  }, []);

  return null;
};

export default TorchEffect;
