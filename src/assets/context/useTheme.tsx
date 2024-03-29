import { useContext } from "react";
import { ThemeContext, Themes } from "./Context";

function useTheme(): Themes {
  const theme = useContext(ThemeContext);
  if (theme === null) {
    throw new Error("useTheme should be used within Themecontext");
  }
  return theme;
}

export default useTheme;
