import React from "react";
import useTheme from "../assets/context/useTheme";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={theme.container}>
      <h2 className={theme.h1}>Rossana Ventrella</h2>
      <img
        className="image"
        src="../assets/Profile-pic.jpg"
        alt="Profile Picture"
        width={200}
      />
      <p className={theme.profession}>Junior Software Developer</p>
      <About
        aboutTitle="About me"
        aboutDescription="My name is Rossana and I'm a career switcher. I work at Checkatrade and I feel very lucky to be surrounded by very supportive managers. I'm passionate about diversifying the world of tech and building things for the web. "
      />
      <Interests
        interestTitle="Interests"
        interestDescription="In my free time, you'll find me practising Calisthenics. This is definitely my medicine for keeping myself healthy and happy. Committing to Calisthenics has helped me to build habits and consistency."
      />
      <Footer />
    </div>
  );
}

export default Container;
