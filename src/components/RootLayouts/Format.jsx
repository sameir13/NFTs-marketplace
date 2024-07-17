import React from "react";
import Navbar from "./Navbar";

const Format = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Format;
