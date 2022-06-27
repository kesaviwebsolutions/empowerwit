import React from "react";
import Main from "../Main";
import Navbar from "../Navbar";
import HomeFooter from "../HomeFooter";

export default function Home() {
  return (
    <div className="background">
      <Navbar />
      <Main />
      <HomeFooter />
    </div>
  );
}
