import React from "react";
import Button from "./Button";
import useTheme from "../assets/context/useTheme";
import Image from "../assets/Profile-pic.jpg";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={theme.container}>
      <h2 className={theme.h1}>Rossana Ventrella</h2>
      <img className="image" src={Image} alt="Profile Picture" width={200} />
      <p className={theme.profession}>Junior Software Developer</p>
      <About
        aboutTitle="About me"
        aboutDescription="My name is Rossana and I'm a career switcher and"
      />
      <Interests
        interestTitle="Interests"
        interestDescription="When I'm not coding, you will find me knitting, sowing or reading"
      />
      <Footer />
    </div>
  );
}

export default Container;