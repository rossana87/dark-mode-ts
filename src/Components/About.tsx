import React from "react";
import useTheme from "../assets/context/useTheme";

type AboutProps = {
  aboutTitle: string;
  aboutDescription: string;
};

function About({ aboutTitle, aboutDescription }: AboutProps) {
  const { theme } = useTheme();
  return (
    <div>
      <h4 className={theme.aboutHeader}>{aboutTitle}</h4>
      <p className={theme.aboutDescription}>{aboutDescription}</p>
    </div>
  );
}

export default About;
