import React from "react";
import LeftPannel from "./components/LeftPannel/LeftPannel";
import RightPanel from "./components/RightPanel/RightPanel";
import TorchEffect from "./components/TorchEffect/TorchEffect";

const App = () => {
  return (
    <div className="min-h-screen bg-primary text-primary-text">
      {/* Skip link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 tag bg-primary-600 text-white"
      >
        Skip to content
      </a>
      <TorchEffect />

      {/* Layout: left fixed on desktop, stacked on mobile */}
      <LeftPannel />
      <RightPanel />
    </div>
  );
};

export default App;
