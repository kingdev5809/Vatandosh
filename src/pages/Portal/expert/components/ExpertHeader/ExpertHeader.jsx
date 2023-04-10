import React from "react";
import Navbar from "../Navbar/Navbar";
import Nav from "../Nav/Nav";

export default function ExpertHeader({ navData, navbarUrl }) {
  return (
    <header className="expert-header">
      <Navbar navbarUrl={navbarUrl} />
      <Nav navData={navData} />
    </header>
  );
}
