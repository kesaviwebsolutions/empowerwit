import React from "react";
import Main from "../Main";
import Navbar from "../Navbar";
import HomeFooter from "../HomeFooter";
import bg1 from "../images/ewit_background3.png";

export default function Home() {
  return (
    <div className="background">
       
      <Navbar />
      <Main />
      <HomeFooter />
    </div>
  );
}
