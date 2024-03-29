import React, { createContext, useState } from "react";

export const lightTheme = {
    buttonClass: "button button-light",
    container: "Container Container-light",
    h1: "main-text text-dark",
    profession: "profession-text profession-dark",
    aboutHeader: "aboutHeader aboutHeader-dark",
    aboutDescription: "aboutHeader aboutDescription-dark",
    interestTitle: "interestTitle interestTitle-dark",
    interestDescription: "interestDescription interestDescription-dark",
    icon: "icon icon-dark",
  }

  const darkTheme = {
    buttonClass: "button button-dark",
    container: "Container Container-dark",
    h1: "main-text text-light",
    profession: "profession-text profession-light",
    aboutHeader: "aboutHeader aboutHeader-light",
    aboutDescription: "aboutHeader aboutDescription-light",
    interestTitle: "interestTitle interestTitle-light",
    interestDescription: "interestDescription interestDescription-light",
    icon: "icon icon-light",
  }

const themes: Record<Theme, typeof lightTheme> = {
  light:lightTheme,
  dark: darkTheme
};


export interface Themes {
  theme: typeof themes['light'];
  toggleTheme: () => void;
}

export type Theme = "light" | "dark";

export interface ThemeProviderProps {
  children: React.ReactNode;
}


const ThemeContext = createContext<Themes | null>(null);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    setTheme(isDark ? themes.dark : themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export { ThemeContext, ThemeProvider };
