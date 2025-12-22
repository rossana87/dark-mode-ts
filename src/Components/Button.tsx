import React from "react";
import useTheme from "../assets/context/useTheme";
import { lightTheme } from "../assets/context/Context";

function Button() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button className={theme.buttonClass} onClick={toggleTheme}>
        {theme === lightTheme ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default Button;
