// Header.js
"use client"; // Marks this component as a client component

import React, { useState } from "react";

function Header() {
  const [visitors, setVisitors] = useState(0);

  const incrementVisitors = () => {
    setVisitors(visitors + 1);
  };

  return (
    <header>
      <p>Number of Visitors: {visitors}</p>
      <button onClick={incrementVisitors}>Increase Visitors</button>
    </header>
  );
}

export default Header;
