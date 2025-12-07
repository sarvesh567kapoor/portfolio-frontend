import React from "react";

export const FullScreenLoader = () => {
  return (
    <div className="loader-screen">
      <div className="loader-ring">
        <div className="loader-logo">
          <span className="loader-angle">&lt;</span>
          <span className="loader-slash">/</span>
          <span className="loader-angle">&gt;</span>
        </div>
      </div>

      <p className="loader-text">
        Bootstrapping portfolio
        <span className="loader-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>

      <p className="loader-subtext">
        Connecting to Laravel API · Loading skills, projects & experience
      </p>
    </div>
  );
};

export default FullScreenLoader;
