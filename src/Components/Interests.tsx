import React from "react";
import useTheme from "../assets/context/useTheme";

type InterestsProps = {
  interestTitle: string;
  interestDescription: string;
};

function Interests({ interestTitle, interestDescription }: InterestsProps) {
  const { theme } = useTheme();
  return (
    <div>
      <h3 className={theme.interestTitle}>{interestTitle}</h3>
      <p className={theme.interestDescription}>{interestDescription}</p>
    </div>
  );
}

export default Interests;
